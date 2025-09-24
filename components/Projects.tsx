import Image from "next/image";
import Link from "next/link";
import Copy from "./gsap/Copy";
import GsapAnimate from "./gsap/GsapAnimate";

const Projects = () => {
    return (
        <div className="py-18  md:py-[13em] flex flex-col md:gap-16 " >
            <Copy>
                <p data-speed={0.5} className="text-3xl sm:text-4xl md:text-5xl  mb-0 md:mb-10 text-shadow-text">
                    Projects
                </p>
            </Copy>

            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-8  mt-[-3vh] sm:mt-[-3vh] md:mt-0">
                {/* Project 1 */}
                <GsapAnimate from="left">
                    <Link
                        data-cursor-text="visit project"
                        href="/projects/ecom"
                        className="cursor-hover-target block group h-[280px] sm:h-[320px] md:h-[360px] rounded-xl overflow-hidden relative"
                    >
                        <Image
                            src="/ecom.webp"
                            alt="E-commerce Project"
                            fill
                            className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </Link>
                </GsapAnimate>

                {/* Project 2 */}
                <GsapAnimate from="right">
                    <Link
                        data-cursor-text="visit project"
                        href="/projects/other"
                        className="cursor-hover-target block group h-[280px] sm:h-[320px] md:h-[360px] rounded-xl overflow-hidden relative mt-[-7vh] sm:mt-[-10vh] md:mt-0"
                    >
                        <Image
                            src="/fit.webp"
                            alt="Fitness Project"
                            fill
                            className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </Link>
                </GsapAnimate>
            </div>

            <div className="text-center mt-12 md:mt-16 ">
                <Copy>
                    <p className="text-shadow-text text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-relaxed">
                        Designing for <span>clarity</span>, <span>impact</span>, and <span>delight</span> — one project at a time.
                    </p>
                </Copy>
            </div>
        </div>
    );
};

export default Projects;
