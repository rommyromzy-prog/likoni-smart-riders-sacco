export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Membership Registration
        </h1>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="07XXXXXXXX"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Occupation
            </label>

            <input
              type="text"
              placeholder="Rider, Business Owner, etc."
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Tell us about yourself"
              className="w-full border rounded-xl p-4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold"
          >
            Submit Application
          </button>

        </form>

      </div>

    </main>
  );
}