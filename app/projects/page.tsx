import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Theend from "@/components/Theend";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className="relative px-5 md:px-10 bg-[#efefef] font-Outfit dark:bg-[#000000e1] dark:text-[#efeded]">
                <Navbar />

                <div className=" relative flex flex-col justify-center md:pt-[10vh] pt-[25vh]  items-center mb-[25vh]">
                    {/* Project 1 */}
                    <div className=" relative w-screen h-[23vh] md:h-screen mb-20">
                        <Link href="#">
                            <Image
                                data-cursor-text="visit project"
                                src="/ecom.png"
                                alt="E-commerce Project"
                                fill
                                className=" md:object-contain cursor-hover-target"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Project 2 */}
                    <div className="relative w-screen h-[25vh] md:h-screen">
                        <Link href="#">
                            <Image
                                data-cursor-text="visit project"

                                src="/fit.png"
                                alt="Fitness Project"
                                fill
                                className="object-contain  cursor-hover-target"
                            />
                        </Link>
                    </div>
                </div>

                <Theend />
                <Footer />
            </div>
            <Banner />
        </>
    );
};

export default Page;
