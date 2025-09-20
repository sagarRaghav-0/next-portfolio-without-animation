
const FirstPage = () => {
    return (

        <div className='grid grid-cols-3 mt-10 h-screen'>
            <div className=" md:space-y-30 col-span-3 md:col-span-2">
                <p className='text-5xl hidden md:block'>I create digital experiences that
                    spark curiosity and leave a mark.
                    Every interface I design is a space
                    where creativity and functionality
                    meet to tell unique stories.
                </p>

                <p className='text-2xl md:text-3xl text-[#aeaeae] mt-10 md:mt-0 '> <span > UX|UI Designer </span> and <span> Developer </span>, crafting intuitive interfaces
                    and digital experiences that connect with people.</p>
            </div>
            <div className="flex justify-center md:col-span-1 md:mt-0 mt-[-65vh] col-span-3 md:items-center ">
                <video
                    src="/black.mp4"
                    autoPlay
                    loop
                    className=" md:w-[85%] rounded-full"
                ></video>
            </div>

        </div>


    )
}

export default FirstPage
