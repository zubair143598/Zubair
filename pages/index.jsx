import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
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
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>

      </main>
    </>
  );
}
