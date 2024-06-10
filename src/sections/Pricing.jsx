import { pricingOptions } from "../constants";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <section id="pricing" className="mt-5 sm:mt-10">
      <h2 className="tracking-wide text-3xl mb-10 sm:text-4xl lg:text-5xl text-center">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
