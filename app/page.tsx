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
      <div className="bg-[#efefef] fixed inset-0  w-screen h-screen z-0"> </div>
      <div className="relative px-5 md:px-10 pt-[20vh] text-[#171717] font-Outfit z-10" >
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
