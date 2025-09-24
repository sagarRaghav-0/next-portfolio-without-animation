import Image from "next/image"
import Copy from "./gsap/Copy"
import GsapAnimate from "./gsap/GsapAnimate"

const Theend = () => {
    return (
        <div className="flex flex-col items-start justify-center dark:bg-[#000000e1] px-5 md:px-10 space-y-5 py-[10vh] ">
            <Copy>

                <p className="text-3xl sm:text-4xl md:text-5xl text-shadow-text  ">The end… and the beginning of our  <span> next project </span>.</p>
            </Copy>

            <div className="flex items-center justify-center gap-x-3 bg-[#ffffff] dark:bg-[#000000e1] dark:text-shadow-text p-4 rounded-3xl dark:hover:bg-[#797878aa] hover:bg-[#dadada] transition ease-in-out duration-500 ">
                <Copy>
                    <p>Make it Happen</p>
                </Copy>
                <div className="bg-[#dadada] p-2 ">
                    <GsapAnimate from="left">
                        <Image
                            src="/box.avif"
                            alt="contact me"
                            width={100}
                            height={100}
                            className=" w-7 h-7"
                        />
                    </GsapAnimate>
                </div>

            </div>
        </div>
    )
}

export default Theend
