import Layout from "@/components/Layout";

const Services = () => (
  <Layout>
    <section className="container mx-auto py-20 text-center">
      <h2 className="text-4xl font-bold text-amber-950 mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service One */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-200 hover:shadow-xl hover:scale-105 hover:rotate-3 transform transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold">Service One</h3>
          <p className="text-gray-600 opacity-90 hover:opacity-100 transition-opacity duration-300">
            We offer high-quality web development services, creating responsive and user-friendly websites tailored to meet your business needs. From design to deployment, we ensure every detail is perfect.
          </p>
        </div>

        {/* Service Two */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-200 hover:shadow-xl hover:scale-105 hover:rotate-3 transform transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold">Service Two</h3>
          <p className="text-gray-600 opacity-90 hover:opacity-100 transition-opacity duration-300">
            Our digital marketing services help you build a strong online presence. We specialize in SEO, content marketing, and paid advertising to help your business grow and reach more customers.
          </p>
        </div>

        {/* Service Three */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-200 hover:shadow-xl hover:scale-105 hover:rotate-3 transform transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold">Service Three</h3>
          <p className="text-gray-600 opacity-90 hover:opacity-100 transition-opacity duration-300">
            We provide expert consulting services to guide businesses in making informed decisions. Whether you are looking to improve operations, scale your business, or invest in new technologies, we are here to help.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
