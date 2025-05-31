const ImageCard = ({ title, image, description }) => {
  return (
    <div className="cursor-pointer rounded-lg overflow-hidden shadow-lg flex flex-col hover:scale-105 hover:shadow-xl transition-all ease-in-out duration-300  ">
      <a href="#portfolio" />
      <div className="relative">
        <a href="#portfolio">
          <img
            loading="lazy"
            className="w-full"
            src={image}
            alt="Dummy Image"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
      </div>
      <div className="px-6 py-4 mb-auto">
        <a
          href="#portfolio"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
        >
          {title}
        </a>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
