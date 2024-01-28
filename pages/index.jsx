import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import MyWork from "@/components/MyWork";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>M Zubair</title>
      </Head>

      <main>
        <Header />
        <Nav />
        <Skills />
        <MyWork />
        <Contact />
      </main>
    </>
  );
}
