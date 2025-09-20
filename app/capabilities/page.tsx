import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Theend from '@/components/Theend'

const page = () => {
    return (
        <div className='px-5 md:px-10  bg-[#efefef] font-Outfit'>
            <Navbar />


            <div className="flex items-start justify-center  md:mt-0 h-screen flex-col">
                <p className="text-3xl md:text-5xl text-[#aeaeae] mb-5">Services That <span> Shape </span> Experiences</p>
                <p>Design, development, and strategy—crafted to bring <br />
                    ideas to life and make every interaction meaningful.</p>
            </div>

            <h2 className=' text-2xl text-[#aeaeae] mb-7'>Capabilities</h2>

            <div className="flex flex-col text-[#171717] mb-[20vh]">
                {/* Capability 1 */}
                <div className="relative overflow-hidden group md:mb-0 mb-5">
                    <div className='flex flex-col md:flex-row md:items-center justify-between  py-2 relative z-10  transition-colors duration-500 group-hover:text-white'>
                        <p className=" text-3xl">
                            Art Direction
                        </p>
                        <p>I craft visual universes that tell your story, break the rules, and make every detail matter.</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-[#171717] transition-all duration-500 group-hover:h-full"></div>
                    <hr className="border-t border-[#d4d4d4]" />
                </div>

                {/* Capability 2 */}
                <div className="relative overflow-hidden group">
                    <div className='flex flex-col md:flex-row md:items-center justify-between  py-2 relative z-10  transition-colors duration-500 group-hover:text-white'>

                        <p className="text-3xl">
                            UI/UX Design
                        </p>
                        <p>I design interfaces that don’t just work—they captivate, guide, and transform the way people experience your brand.</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-[#171717] transition-all duration-500 group-hover:h-full"></div>
                    <hr className="border-t border-[#d4d4d4]" />
                </div>


            </div>

            {/* <Parallax /> */}

            <Theend />
            <Footer />
            <Banner />
        </div>
    )
}

export default page
