import Copy from "./gsap/Copy"

const Footer = () => {
    return (
        <div className='grid grid-cols-3 md:text-xl items-center py-[13vh] text-center px-5 md:px-10 dark:bg-[#000000e1] bg-[#efefef] dark:text-[#E1E1E1]  md:space-y-0 space-y-7 '>

            <div className="r col-span-4 md:col-span-1">
                <Copy>
                    <div data-cursor-text="LnkedIn" className="cursor-hover-target cursor-hover-social">LinkedIn</div>
                    <div data-cursor-text="Instagram" className="cursor-hover-target cursor-hover-social">Instagram</div>
                    <div data-cursor-text="Github" className="cursor-hover-target cursor-hover-social">GitHub</div>
                </Copy>
            </div>

            <div className=" col-span-4 md:col-span-1">
                <Copy>

                    <div data-cursor-text="Email" className="cursor-hover-target cursor-hover-social">Email</div>

                </Copy>

            </div>


            <div className=" col-span-4 md:col-span-1">
                <Copy>

                    <p className="cursor-hover-target cursor-hover-social" data-cursor-text="Me"  >© {new Date().getFullYear()} Sagar Raghav</p>
                </Copy>


            </div>
        </div>
    )
}

export default Footer
