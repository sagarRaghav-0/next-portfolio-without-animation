import Image from "next/image"
import Copy from "./gsap/Copy"
import GsapAnimate from "./gsap/GsapAnimate"

const Footer = () => {
    return (
        <div className='grid grid-cols-4 md:text-xl items-center pb-[13vh] md:space-y-0 space-y-7 '>
            <div className="col-span-4 md:col-span-1 ">
                <GsapAnimate from="bottom">
                    <Image
                        data-cursor-text="Itachi Uchia"
                        src="/itachi.gif"
                        alt="contact me"
                        width={100}
                        height={100}
                        className=" w-30 h-45 cursor-hover-target"
                    />
                </GsapAnimate>
            </div>
            <div className="md:text-center col-span-4 md:col-span-1">
                <Copy>
                    <div data-cursor-text="LnkedIn" className="cursor-hover-target cursor-hover-social">LinkedIn</div>
                    <div data-cursor-text="Instagram" className="cursor-hover-target cursor-hover-social">Instagram</div>
                    <div data-cursor-text="Github" className="cursor-hover-target cursor-hover-social">GitHub</div>
                </Copy>
            </div>

            <div className="md:text-center col-span-4 md:col-span-1">
                <Copy>

                    <div data-cursor-text="Email" className="cursor-hover-target cursor-hover-social">Email</div>

                </Copy>

            </div>

            <div className="md:text-right col-span-4 md:col-span-1">
                <Copy>

                    <p className="cursor-hover-target cursor-hover-social" data-cursor-text="Me"  >© {new Date().getFullYear()} Sagar Raghav</p>
                </Copy>


            </div>
        </div>
    )
}

export default Footer
