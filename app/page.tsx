"use client"
import Capabilities from "@/components/Capabilities";
import FirstPage from "@/components/FirstPage";
import Projects from "@/components/Projects";
import Purpose from "@/components/Purpose";
import Shadow from "@/components/Shadow";



export default function Home() {




  return (

    <div className="relative bg-[#efefef] dark:text-[#efeded] dark:bg-[#000000e1] px-5 md:px-10 pt-[20vh]  font-Outfit z-10" >

      <FirstPage />

      <Purpose />

      <Projects />

      <Capabilities />

      <Shadow />



    </div>

  );
}
