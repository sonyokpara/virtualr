const FeatureCard = ({ icon, text, description }) => {
  const IconComponent = icon;
  return (
    <div className="flex gap-5">
      <div className="flex justify-center items-center bg-neutral-900 text-orange-700 w-10 h-10 rounded-full">
        <IconComponent />
      </div>
      <div>
        <h5 className="mt-1 mb-6 text-xl">{text}</h5>
        <p className="text-md p-2 mb-20 text-neutral-500 break-words">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
