"use client";

import Copy from "./gsap/Copy";


const Purpose = () => {




    return (
        <div className="flex flex-col gap-7 mb-13 mt-[-10vh] md:mt-0">
            <Copy>
                <h2 className="text-3xl text-[#aeaeae]">Purpose</h2>
            </Copy>
            <div className="md:text-5xl text-2xl flex flex-col  md:leading-15">
                <Copy>

                    <p className="headline2 mb-5">
                        I believe in design that truly connects. Every interface, interaction, and detail has a purpose: to inspire, simplify, and make an impact.
                    </p>


                    <p className="headline2  mb-5">
                        I don’t just create pages; I craft experiences that work for real people, anywhere in the world. Guided by clarity, aesthetics, and functionality, I ensure every design is intuitive and memorable.
                    </p>


                    <p className="headline2 mb-5">
                        My work doesn’t follow trends—it follows principles. I value creativity that solves problems, innovation that makes sense, and projects that help brands shine globally.
                    </p>
                </Copy>


            </div>

        </div>
    );
};

export default Purpose;
