export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">

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
              placeholder="07XXXXXXXX"
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Occupation
            </label>

            <input
              type="text"
              placeholder="Rider, Business Owner, etc."
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Tell us about yourself"
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900"
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