import image1 from "../../public/image1.avif";

const Image1 = () => {
  return (
    <div className="h-[100vh] py-30 px-10 border border-t-0 border-b border-gray-300 border-dashed w-6xl mx-auto flex flex-col items-center justify-center">
      {image1 && <img src={image1} />}
    </div>
  );
};

export default Image1;
