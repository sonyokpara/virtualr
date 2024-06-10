const TestimonialCard = ({ user, company, image, text }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
      <div className="rounded-md bg-neutral text-md p-6 border border-neutral-800 font-thin">
        <p className="">{text}</p>
        <div className="flex items-start mt-8">
          <img src={image} alt={user} className="w-12 h-12 rounded-full mr-6" />
          <div>
            <h6>{user}</h6>
            <span className="text-neutral-500 italic text-sm font-normal">
              {company}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
