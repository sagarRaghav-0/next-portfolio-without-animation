import Copy from '@/components/gsap/Copy'
import Link from 'next/link'

const page = () => {
    return (
        <div className='px-5 md:px-10  bg-[#efefef] font-Outfit dark:bg-[#000000e1] dark:text-[#efeded]'>
            <div className='flex flex-col pt-[15vh] h-screen justify-center pb-[15vh]'>
                <div className='flex flex-col gap-5 mb-20'>
                    <Copy>
                        <p className='text-3xl md:text-5xl text-shadow-text md:leading-[3.5rem] '>Behind every <span> great design </span> there’s a<br />
                            conversation waiting to <span> happen</span>
                        </p>
                        <p>Let’s talk, let’s explore, let’s create.</p>
                    </Copy>
                </div>

                <div className="flex flex-col text-3xl space-y-4 max-w-[400px]">
                    <Copy>

                        <Link data-cursor-text="LnkedIn" href="#" className="cursor-hover-target cursor-hover-social flex items-center gap-2  hover:translate-x-2 transition-transform">
                            LinkedIn <span>→</span>
                        </Link>
                        <Link data-cursor-text="Email" href="#" className="cursor-hover-target cursor-hover-social flex items-center gap-2 hover:translate-x-2 transition-transform">
                            Email <span>→</span>
                        </Link>
                        <Link data-cursor-text="Instagram" href="#" className=" cursor-hover-target cursor-hover-social flex items-center gap-2 hover:translate-x-2 transition-transform">
                            Instagram <span>→</span>
                        </Link>
                        <Link data-cursor-text="Github" href="#" className=" cursor-hover-target cursor-hover-social flex items-center gap-2 hover:translate-x-2 transition-transform">
                            Github <span>→</span>
                        </Link>
                    </Copy>

                </div>
            </div>


        </div>

    )
}

export default page
