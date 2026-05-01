const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-full w-6xl flex items-center justify-center border-l-2 border-r-2 border-dashed border-gray-300 px-12">
        <div className="flex flex-col items-center gap-6">
          <p className="text-5xl font-medium flex flex-col items-center">Video Edits That <span className="block">Stand Out</span></p>
          <p className="text-lg flex flex-col items-center">Hook faster. Edit smarter. Grow your  <span className="block">audience with vidwave
            </span></p>
          <div className="flex justify-center ">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">Book a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// bg-[linear-gradient(0deg,#f0f0f0_1px,transparent_1px),linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[length:80px_80px]