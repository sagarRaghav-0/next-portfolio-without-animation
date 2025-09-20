import Image from "next/image"

const Theend = () => {
    return (
        <div className="flex flex-col items-start justify-center space-y-5 mb-[20vh]">
            <p className="text-3xl md:text-5xl text-[#aeaeae] ">The end… and the beginning of our <br /> <span> next project </span>.</p>

            <div className="flex items-center justify-center gap-x-3 bg-[#ffffff] p-4 rounded-3xl hover:bg-[#dadada] transition ease-in-out duration-500 ">
                <p>Make it Happen</p>
                <div className="bg-[#dadada] p-2 ">
                    <Image
                        src="/box.avif"
                        alt="contact me"
                        width={100}
                        height={100}
                        className=" w-7 h-7"
                    />
                </div>

            </div>
        </div>
    )
}

export default Theend
