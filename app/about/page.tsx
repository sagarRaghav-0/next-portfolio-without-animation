import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Copy from "@/components/gsap/Copy"
import Navbar from "@/components/Navbar"
import Theend from "@/components/Theend"

const page = () => {
    return (
        <>
            <div className="px-5 md:px-10 bg-[#efefef] dark:text-[#efeded] dark:bg-[#000000e1] font-Outfit">
                <Navbar />
                <div className="flex  items-center  w-full h-screen pt-[10vh] mb-10">
                    <Copy>
                        <p className="text-shadow-text text-2xl md:text-5xl   md:pt-[10vh] tracking-wide leading-tight ">
                            I’m Sagar, a <span>UI/UX designer</span> with a background in web and <span> front-end development </span>.
                            My work merges design, usability, and strategy to create digital experiences that connect with people.
                            Passionate about web design, branding, Progressive web app, I focus on transforming ideas into impactful,
                            <span> user-centered solutions</span>.

                        </p>
                    </Copy>
                </div>
                <Theend />
                <Footer />
            </div>
            <Banner />
        </>
    )
}

export default page
