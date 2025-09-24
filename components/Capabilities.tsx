import Copy from "./gsap/Copy";

const Capabilities = () => {
    return (
        <div data-lag={0.4} className="md:mb-50">
            <Copy>
                <p className="text-3xl sm:text-4xl md:text-5xl mb-8 text-shadow-text">Capabilities</p>
            </Copy>
            <div className="flex flex-col text-[#171717] dark:text-[#efeded]  text-4xl md:text-5xl">
                {/* Capability 1 */}
                <div data-lag={0.1} data-cursor-text="web" className="relative overflow-hidden group cursor-hover-target cursor-hover-capability">
                    <Copy>

                        <p className="relative z-10 px-4 py-2 transition-colors duration-500 group-hover:text-white">
                            Art Direction
                        </p>
                    </Copy>

                    <div className="absolute inset-x-0 bottom-0 h-0 bg-[#171717]  dark:bg-[#797878aa] transition-all duration-500 group-hover:h-full"></div>
                </div>
                <hr className="border-t border-[#d4d4d4]" />

                {/* Capability 2 */}
                <div data-lag={0.1} data-cursor-text="design" className="relative overflow-hidden group cursor-hover-target cursor-hover-capability">
                    <Copy>

                        <p className="relative z-10 px-4 py-2 transition-colors duration-500 group-hover:text-white">
                            UI/UX Design
                        </p>
                    </Copy>

                    <div className="absolute inset-x-0 bottom-0 h-0 bg-[#171717] dark:bg-[#797878aa] transition-all duration-500 group-hover:h-full"></div>
                </div>
                <hr className="border-t border-[#d4d4d4]" />

                {/* Capability 3 */}
                <div data-lag={0.1} data-cursor-text="dev" className="relative overflow-hidden group cursor-hover-target cursor-hover-capability">
                    <Copy>

                        <p className="relative z-10 px-4 py-2 transition-colors duration-500 group-hover:text-white">
                            Web Development
                        </p>
                    </Copy>

                    <div className="absolute inset-x-0 bottom-0 h-0 bg-[#171717] dark:bg-[#797878aa] transition-all duration-500 group-hover:h-full"></div>
                </div>
                <hr className="border-t border-[#d4d4d4]" />

            </div>
        </div>
    );
};

export default Capabilities;
