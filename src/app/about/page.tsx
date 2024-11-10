import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="container mx-auto py-20 text-center">
      <h2 className="text-4xl font-bold text-amber-950 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 mb-8">
        We are a team of dedicated professionals here to help your business grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-200 hover:shadow-xl hover:scale-105 hover:rotate-3 transform transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-gray-600 opacity-90 hover:opacity-100 transition-opacity duration-300">
            To provide top-notch services that drive success.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-200 hover:shadow-xl hover:scale-105 hover:rotate-3 transform transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-gray-600 opacity-90 hover:opacity-100 transition-opacity duration-300">
            To be the leading provider of innovative solutions for businesses worldwide.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-200 hover:shadow-xl hover:scale-105 hover:rotate-3 transform transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold">Our Values</h3>
          <p className="text-gray-600 opacity-90 hover:opacity-100 transition-opacity duration-300">
            Integrity, innovation, and excellence in everything we do.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
