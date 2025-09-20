import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Theend from "@/components/Theend"

const page = () => {
    return (
        <>
            <div className="px-5 md:px-10 bg-[#efefef] font-Outfit">
                <Navbar />
                <div className="grid grid-cols-6 ">

                    <p className="text-[#aeaeae] text-2xl md:text-5xl h-screen pt-[10vh] tracking-wide leading-tight col-span-6 md:col-span-5">
                        I’m Sagar, a <span>UI/UX designer</span> with a background in web and <span> front-end development </span>.
                        My work merges design, usability, and strategy to create digital experiences that connect with people.
                        Passionate about web design, branding, Progressive web app, I focus on transforming ideas into impactful,
                        <span> user-centered solutions </span>.

                    </p>
                </div>
                <Theend />
                <Footer />
            </div>
            <Banner />
        </>
    )
}

export default page
