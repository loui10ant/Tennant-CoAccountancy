import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="mb-6 text-6xl font-bold text-green-900">
          Straightforward accounting for growing businesses.
        </h1>

        <p className="max-w-2xl text-xl text-gray-600">
          Helping sole traders and limited companies spend less time on paperwork
          and more time running their business.
        </p>
      </main>

      <Footer />
    </>
  );
}