import Head from "next/head";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { GetServerSideProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { GoArrowUp } from "react-icons/go";
import Link from "next/link";
// import { Roboto } from "@next/font/google";

// const roboto = Roboto({ weight: "400" });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
  skills: Skill[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div
      className={`bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-transparent scrollbar-thumb-green-800`}
    >
      <Head>
        <title>Nisarg Patel</title>
        <link rel="icon" href="/npLogo.png" />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      {/* Footer */}
      <footer className="bg-black mt-5 py-5 px-3 text-white flex items-center justify-between snap-start font-light">
        <b className="px-5">Nisarg Patel</b>
        <Link href={"#"}>
          <b className="flex space-x-2 items-center px-5">
            To Top <GoArrowUp />
          </b>
        </Link>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
  };
};
