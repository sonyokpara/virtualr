import { testimonials } from "../constants";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-10 sm:mt-20">
      <div className="tacking-wide">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:mt-20">
          What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
