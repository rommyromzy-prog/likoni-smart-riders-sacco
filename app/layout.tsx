import type { Metadata } from "next";
// @ts-ignore: side-effect CSS import without type declarations
import "./globals.css";

export const metadata: Metadata = {
  title: "Likoni Smart Riders SACCO",
  description:
    "Empowering riders through savings, loans, and financial growth.",
  verification: {
    google: "vJul7U_DP02-oWQ3mO85l0NoCbTL4bXgadxM_yVM-dA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}