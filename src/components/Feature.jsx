import { features } from "../constants";
import FeatureCard from "../components/FeatureCard";

const Feature = () => {
  return (
    <section
      id="features"
      className="relative min-h-[800px] mt-20 border-b border-neutral-800"
    >
      <div className="text-center">
        <span className="uppercase text-orange-500 text-sm font-medium px-4 py-1 bg-neutral-900 h-12 rounded-full">
          feature
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl my-10 lg:my-16 tracking-wide">
          Easily build <span className="gradient-text">your code</span>
        </h2>
      </div>
      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
