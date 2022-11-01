import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Nisarg Patel</title>
        <link rel="icon" href="/npLogo.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <Experience />
      </section>

      {/* Projects */}
      {/* Skills */}

      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Contact */}
    </div>
  );
}
