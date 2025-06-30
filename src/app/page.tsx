import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsList from "./NewsList.client";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <h1>Latest News</h1>
        <NewsList />
      </main>
      <Footer />
    </>
  );
}
