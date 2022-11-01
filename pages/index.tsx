import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen">
      <Head>
        <title>Nisarg Patel</title>
        <link rel="icon" href="/npLogo.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Projects */}
      {/* Skills */}
      {/* About */}
      {/* Contact */}
    </div>
  );
}
