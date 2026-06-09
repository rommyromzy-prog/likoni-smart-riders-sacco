"use client";

import { useState } from "react";

export default function MembershipPage() {

  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [bikeType, setBikeType] = useState("");

  const sendToWhatsApp = () => {

  if (!name || !phone || !idNumber || !bikeType) {
    alert("Please fill in all fields.");
    return;
  }

  const message = `*NEW MOTORCYCLE REQUEST*

Name: ${name}
Phone: ${phone}
ID Number: ${idNumber}
Motorcycle: ${bikeType}`;

  const whatsappUrl =
    `https://wa.me/254751655711?text=${encodeURIComponent(message)}`;

  setSuccess(true);

  window.open(whatsappUrl, "_blank");
};
 return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

<h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
  Motorcycle Financing Request Form
</h1>
        <p className="text-center text-gray-600 mb-8">
          Success is not by accident.
        </p>

          <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    setSuccess(true);
  }}
 >


          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
           <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder="Enter your full name"
           className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
           />
          </div>

          <div>
     
           <label className="block mb-2 font-medium">
           Phone Number
           </label>

           <input
           type="tel"
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
           placeholder="07XXXXXXXX"
           className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
           />
          </div>

          <div>
          <label className="block mb-2 font-medium">
           ID Number
          </label> <input
           type="text"
           value={idNumber}
           onChange={(e) => setIdNumber(e.target.value)}
           placeholder="Enter ID Number"
           className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
         />
          </div>
      <div>
        <label className="block mb-2 font-medium">
          Motorcycle Type
        </label>
        <select
          value={bikeType}
          onChange={(e) => setBikeType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
          >
          <option value="">Choose Motorcycle</option>
          <option value="Boxer">Boxer</option>
          <option value="Haojin">Haojin</option>
          <option value="TVS">TVS</option>
          <option value="Spiro">Spiro</option>
        </select>
        </div>
        <button

  type="button"
  onClick={sendToWhatsApp}
  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg"
>
  📱 Send Request via WhatsApp
</button>

          {success && (
            <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-6 text-center">
              ✅ Application submitted successfully!
            </div>
          )}
      </form>

      </div>

    </main>
  );
}