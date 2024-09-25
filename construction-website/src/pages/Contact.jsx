export default function Contact() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Your message"></textarea>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
