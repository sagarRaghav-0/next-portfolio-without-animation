import Image from "next/image"
import Copy from "./gsap/Copy"
import GsapAnimate from "./gsap/GsapAnimate"

const Theend = () => {
    return (
        <div className="flex flex-col items-start justify-center space-y-5 mb-[20vh]">
            <Copy>

                <p className="text-2xl md:text-5xl text-[#aeaeae] ">The end… and the beginning of our  <span> next project </span>.</p>
            </Copy>

            <div className="flex items-center justify-center gap-x-3 bg-[#ffffff] p-4 rounded-3xl hover:bg-[#dadada] transition ease-in-out duration-500 ">
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
