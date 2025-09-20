import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <div className="py-16 mb-13 md:mb-0 flex flex-col gap-25 md:gap-30" id="projects">
            <p className="text-3xl font-semibold mb-8 md:mb-[-7vh] text-[#aeaeae]">Projects</p>

            <div className="grid grid-cols-2 gap-y-12 md:gap-6 mt-[-20vh] md:mt-0">
                {/* Project 1 */}
                <Link
                    href="/projects/ecom"
                    className="block group h-[360px] rounded-xl overflow-hidden relative md:col-span-1 col-span-2"
                >
                    <Image
                        src="/ecom.png"
                        alt="E-commerce Project"
                        fill
                        className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Project 2 */}
                <Link
                    href="/projects/other"
                    className="block group h-[360px] rounded-xl overflow-hidden relative mt-[-20vh] md:mt-0 md:col-span-1  col-span-2"
                >
                    <Image
                        src="/fit.png"
                        alt="Fitness Project"
                        fill
                        className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>
            </div>

            <div className="text-center">
                <p className="text-[#aeaeae] text-2xl mt-[-10vh] md:mt-0 md:text-5xl">
                    Designing for <span>clarity</span>, <span>impact</span>, and{" "}
                    <span>delight</span> — one project at a time.
                </p>
            </div>
        </div>
    );
};

export default Projects;
