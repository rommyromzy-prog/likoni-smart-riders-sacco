import { NextResponse } from "next/server";
import axios from "axios";

const consumerKey = process.env.DARAJA_CONSUMER_KEY!;
const consumerSecret = process.env.DARAJA_CONSUMER_SECRET!;
const shortCode = process.env.DARAJA_SHORTCODE!;
const passKey = process.env.DARAJA_PASSKEY!;

export async function POST(req: Request) {
  try {
    const { phone, amount } = await req.json();

    // Generate access token
    const auth = Buffer.from(
      `${consumerKey}:${consumerSecret}`
    ).toString("base64");

    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Timestamp
    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, 14);

    // Password
    const password = Buffer.from(
      `${shortCode}${passKey}${timestamp}`
    ).toString("base64");

    // STK Push Request
    const stkResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: shortCode,
        PhoneNumber: phone,
        CallBackURL: "https://mydomain.com/callback",
        AccountReference: "LikoniSacco",
        TransactionDesc: "Membership Payment",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return NextResponse.json(stkResponse.data);

  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}