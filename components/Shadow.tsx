import Copy from "./gsap/Copy";

const Shadow = () => {
    return (
        <div
            className="cursor-hover-target bg-[url('/shadow.webp')] px-5 md:px-10  darkshadow bg-cover bg-no-repeat bg-center h-[150vh]  flex pt-[30vh] justify-start py-10 md:pb-[30vh] -mx-5 md:-mx-10 w-[calc(100%+2.5rem)] md:w-[calc(100%+5rem)]"
            data-cursor-text=""
        >
            <Copy>
                <p data-speed={0.5} className="text-3xl sm:text-4xl md:text-5xl text-shadow-text leading-relaxed tracking-wider">
                    <span> Touching </span> possibilities, designing the future,
                    <br />
                    transforming vision into experience.
                </p>
            </Copy>
        </div>

    );
};

export default Shadow;
