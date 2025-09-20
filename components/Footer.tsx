import Image from "next/image"

const Footer = () => {
    return (
        <div className='grid grid-cols-4 items-center pb-[13vh] md:space-y-0 space-y-7 '>
            <div className="col-span-4 md:col-span-1 ">
                <Image
                    src="/itachi.gif"
                    alt="contact me"
                    width={100}
                    height={100}
                    className=" w-30 h-45 "
                />
            </div>
            <div className="md:text-center col-span-4 md:col-span-1">
                <div>LinkedIn</div>
                <div>Instagram</div>
                <div>GitHub</div>
            </div>

            <div className="md:text-center col-span-4 md:col-span-1">
                <p>Email</p>
            </div>

            <div className="md:text-right col-span-4 md:col-span-1">
                <p>© {new Date().getFullYear()} Sagar Raghav</p>

            </div>
        </div>
    )
}

export default Footer
