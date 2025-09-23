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
import { ReactLenis } from "lenis/react";



export default function Home() {




  return (
    <>
      <ReactLenis root>

        <div className="relative bg-[#efefef] px-5 md:px-10 pt-[20vh]  font-Outfit z-10" >
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
      </ReactLenis>

    </>
  );
}
