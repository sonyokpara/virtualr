import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="w-full sm:w-1/3 p-2">
      <div className="border border-neutral-700 rounded-xl p-5">
        <h4 className="text-2xl sm:text-3xl mb-8 border-b pb-2 border-neutral-700">
          {title}
          {title === "Pro" && (
            <span className="ml-2 mb-4 text-base sm:text-md text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text whitespace-nowrap">
              (Most Popular)
            </span>
          )}
          <p>
            <span className="text-2xl">{price}</span>
            <span className="text-neutral-400 text-sm tracking-tighter">
              /Month
            </span>
          </p>
        </h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="pl-2 text-slate-300 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button
            label="Subscribe"
            borderColor="border-orange-900"
            classProps="px-8 transition duration-200 hover:bg-orange-900"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
