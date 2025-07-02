import ContactUs from '../../components/ContactUs';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
