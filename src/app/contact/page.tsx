import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    <section className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-amber-950 mb-4 text-center">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Reach out to us for any inquiries or assistance!
      </p>

      <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-950 text-white py-2 px-4 rounded hover:bg-amber-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  </Layout>
);

export default Contact;
