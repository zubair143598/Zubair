import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import MyWork from "@/components/MyWork";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";

export default function Home() {
 

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <main>
        <Header/>
        <Nav/>
        <Skills/>
        <Experience/>
        <Services/>
        <MyWork/>
        <Testimonial/>
        <Contact/>
        <Footer/>

      </main>
    </>
  );
}
