"use client"
import Banner from "@/components/Banner";
import Capabilities from "@/components/Capabilities";
import FirstPage from "@/components/FirstPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Purpose from "@/components/Purpose";
import Shadow from "@/components/Shadow";
import Theend from "@/components/Theend";



export default function Home() {




  return (
    <>

      <div className="relative bg-[#efefef] dark:text-[#efeded] dark:bg-[#000000e1] px-5 md:px-10 pt-[20vh]  font-Outfit z-10" >
        <Navbar />

        <FirstPage />

        <Purpose />

        <Projects />

        <Capabilities />

        <Shadow />

        <Theend />

        <Footer />

      </div>
      <Banner />

    </>
  );
}
