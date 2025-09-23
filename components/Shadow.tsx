import Copy from "./gsap/Copy";

const Shadow = () => {
    return (
        <div data-cursor-text="" className="cursor-hover-target bg-[url('/shadow.png')] bg-contain md:bg-cover bg-no-repeat bg-center h-[150vh] w-full flex pt-[30vh] justify-start mb-[-40vh] md:mb-[20vh]">
            <Copy>
                <p className="text-3xl sm:text-4xl md:text-5xl  text-shadow-text leading-relaxed tracking-wider"> <span> Touching </span> possibilities, designing the future,
                    <br />
                    transforming vision into experience.
                </p>
            </Copy>
        </div >
    );
};

export default Shadow;
