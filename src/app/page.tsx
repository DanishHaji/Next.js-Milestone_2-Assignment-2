import Layout from '../components/Layout';
import Image from 'next/image';

const Home = () => (
  <Layout>
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-950 mb-4">Welcome to Our Company</h2>
        <p className="text-lg text-gray-700 mb-8">We provide the best services to grow your business.</p>
        <Image src="/1.jpeg" alt="Hero Image" width={600} height={400} className="rounded-lg shadow-lg mx-auto" />
      </div>
    </section>
  </Layout>
);

export default Home;
