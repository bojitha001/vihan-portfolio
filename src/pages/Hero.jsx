const Hero = () => {
  return (
    <div className="h-[80vh] border border-b-0 border-gray-300 border-dashed w-6xl mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col mt-40">

        <div className="h-full w-full flex items-center justify-center px-12 ">
          {/* <div className="z-10 bg-[linear-gradient(180deg,#f0f0f0_1px,transparent_1px),linear-gradient(-90deg,#f0f0f0_1px,transparent_1px)] bg-[length:80px_80px] h-200 w-full absolute"></div> */}
          <div className="w-full flex flex-col items-center gap-6">
            <p className="text-[58px] leading-16 font-medium flex flex-col items-center">
              <p>
                Video <span className="great-vibes-regular"> Edits </span>that
              </p>
              <p className="">
                stands <span className="">out</span>
              </p>
            </p>
            <p className="text-lg flex flex-col items-center text-gray-500 ">
              Hook faster. Edit smarter. Grow your{" "}
              <span className="block">audience with vidwave</span>
            </p>
            <div className="flex justify-center ">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                Book a Call
              </button>
            </div>
          </div>
        </div>


        <div className="w-6xl h-6xl grid grid-cols-4 border-b border-t border-dashed border-gray-300 mt-12 h-40">
            <div className="border-r border-dashed border-gray-300 h-full">
                <div className="flex flex-col items-start justify-center h-full px-10">
                    <p className="text-lg text-gray-500">Projects Completed</p>
                    <p className="text-3xl">100+</p>
                </div>
            </div>
            <div className="border-r border-dashed border-gray-300 h-full">
                <div className="flex flex-col items-start justify-center h-full px-10">
                    <p className="text-lg text-gray-500">Satisfaction rate</p>
                    <p className="text-3xl">100%</p>
                </div>
            </div>
            <div className="border-r border-dashed border-gray-300 h-full">
                <div className="flex flex-col items-start justify-center h-full px-10">
                    <p className="text-lg text-gray-500">Projects Completed</p>
                    <p className="text-3xl">100+</p>
                </div>
            </div>
            <div className="border-r border-dashed border-gray-300 h-full">
                <div className="flex flex-col items-start justify-center h-full px-10">
                    <p className="text-lg text-gray-500">Projects Completed</p>
                    <p className="text-3xl">100+</p>
                </div>
            </div>
        </div>
        
      </div>

    </div>
  );
};

export default Hero;
// bg-[linear-gradient(0deg,#f0f0f0_1px,transparent_1px),linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[length:80px_80px]
