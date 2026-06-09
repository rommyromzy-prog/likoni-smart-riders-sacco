"use client";

import { useState } from "react";

export default function MotorcycleRequestPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [motorcycle, setMotorcycle] = useState("Boxer");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
NEW MOTORCYCLE REQUEST

Name: ${name}
Phone: ${phone}
ID Number: ${idNumber}
Motorcycle: ${motorcycle}
`;

    const whatsappUrl =
      `https://wa.me/254751655711?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Motorcycle Request Form
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Success is not by accident.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Full Name
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Phone Number
            </label>

            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              ID Number
            </label>

            <input
              type="text"
              required
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Motorcycle Type
            </label>

            <select
              value={motorcycle}
              onChange={(e) => setMotorcycle(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            >
              <option>Boxer</option>
              <option>Haojin</option>
              <option>TVS</option>
              <option>Spiro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold"
          >
            Send Request
          </button>

        </form>

      </div>

    </main>
  );
}