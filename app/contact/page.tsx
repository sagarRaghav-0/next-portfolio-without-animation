import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Copy from '@/components/gsap/Copy'
import Navbar from '@/components/Navbar'
import Theend from '@/components/Theend'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='px-5 md:px-10  bg-[#efefef] font-Outfit'>
                <Navbar />
                <div className='flex flex-col pt-[10vh] h-screen justify-center mb-[15vh]'>
                    <div className='flex flex-col gap-5 mb-20'>
                        <Copy>
                            <p className='text-3xl md:text-5xl text-[#aeaeae] '>Behind every <span> great design </span> there’s a<br />
                                conversation waiting to <span> happen</span>
                            </p>
                            <p>Let’s talk, let’s explore, let’s create.</p>
                        </Copy>
                    </div>

                    <div className="flex flex-col text-3xl space-y-4 w-fit">
                        <Copy>

                            <Link href="#" className="flex items-center gap-2  hover:translate-x-2 transition-transform">
                                LinkedIn <span>→</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                                Behance <span>→</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                                Email <span>→</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                                Instagram <span>→</span>
                            </Link>
                        </Copy>

                    </div>
                </div>
                <Theend />
                <Footer />

            </div>
            <Banner />

        </>
    )
}

export default page
