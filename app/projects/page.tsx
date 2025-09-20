import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Theend from "@/components/Theend";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className="relative px-5 md:px-10 bg-[#efefef] font-Outfit ">
                <Navbar />

                <div className=" relative flex flex-col justify-center md:mt-0 mt-15  mb-[20vh] items-center md:mb-[30vh]">
                    {/* Project 1 */}
                    <div className=" relative w-screen h-[20vh] md:h-screen my-20 md:mt-10">
                        <Link href="#">
                            <Image
                                src="/ecom.png"
                                alt="E-commerce Project"
                                fill
                                className=" md:object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Project 2 */}
                    <div className="relative w-screen h-[25vh] md:h-screen">
                        <Link href="#">
                            <Image
                                src="/fit.png"
                                alt="Fitness Project"
                                fill
                                className="object-contain"
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
