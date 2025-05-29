const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 w-0 group-hover:w-full"></div>
      <div className="p-6">
        <div className="mb-6 text-indigo-500 text-3xl md:text-5xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-2">{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
