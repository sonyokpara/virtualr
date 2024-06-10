import { CheckCircle2 } from "lucide-react";
import CodeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section id="workflow" className="mt-10">
      <h2 className="text-3xl mb-4 sm:text-4xl lg:text-5xl text-center">
        Accelerate your <span className="gradient-text">coding workflow</span>
      </h2>

      <div className="flex justify-center items-center flex-wrap">
        <div className="w-full lg:w-1/2 p-2">
          <img src={CodeImg} alt="code image" />
        </div>
        <div className="w-full lg:w-1/2 pt-12">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="flex justify-center items-center w-10 h-10 bg-neutral-900 text-green-400 p-2 mx-6 rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="text-md lg:text-xl mt-1 mb-2">{item.title}</h5>
                <p className="text-sm lg:text-md text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
