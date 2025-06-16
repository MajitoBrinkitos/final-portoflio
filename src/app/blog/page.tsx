function Blog () {
    return(
        <>
            <div className="pt-[100px] sm:pt-[100px] bg-[#eeeeee] text-[#222831] w-full min-h-screen px-4 sm:px-6 lg:px-20 py-12 xl:h-full xl:py-32 flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="grid grid-cols-2 gap-2 h-96">
                    <div className="flex flex-col justify-center">
                        <span className="text-[#ff5722] text-[24px]">January 1st - 2024</span>
                        <h2 className="text-[#222831] text-5xl">From Then to There and Now</h2>
                        <h3 className="text-[#393e46] text-2xl">A small introduction about how a Telecommunications Engineer ended chasing a Frontend career.</h3>
                    </div>

                    <div className="border border-[#ff5722] flex justify-center mask-[url(/images/blog/main-post.png)] bg-[url(/images/blog/main-post.png)]">
                        <img className="" src="/images/blog/main-post.png" alt="Profile picture in blog section" />
                    </div>
                </div>
            </div>

            <hr className="w-full" />

             <div className="pt-[100px] sm:pt-[100px] bg-[#eeeeee] text-[#222831] w-full min-h-screen px-4 sm:px-6 lg:px-20 py-12 xl:h-full xl:py-32 flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center">
                        <span className="text-[#ff5722] text-[24px]">July 16 - 2024</span>
                        <h2 className="text-[#222831] text-5xl">Where do I start?</h2>
                        <h3 className="text-[#393e46] text-2xl">In a world where information is everywhere and everything, a clear and doable roadmap is the key to success.</h3>
                    </div>
                    <div className="flex justify-center">
                        <img className="rounded-2xl" src="/images/blog/july16.png" alt="Profile picture in blog section" />
                    </div>
                </div>
            </div>

            <hr className="w-full" />

             <div className="pt-[100px] sm:pt-[100px] bg-[#eeeeee] text-[#222831] w-full min-h-screen px-4 sm:px-6 lg:px-20 py-12 xl:h-full xl:py-32 flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center">
                        <span className="text-[#ff5722] text-[24px]">October 5 - 2025</span>
                        <h2 className="text-[#222831] text-5xl">Never fall for a bootcamp</h2>
                        <h3 className="text-[#393e46] text-2xl">During my career change process, bootcamps seemed to be a good option. The result was anxiety and a waste of money.</h3>
                    </div>
                    <div className="flex justify-center">
                        <img className="rounded-2xl" src="/images/blog/oct5.jpg" alt="Profile picture in blog section" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Blog