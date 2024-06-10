import Button from "../components/Button";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <section id="features" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl max-w-4xl lg:max-w-3xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{" "}
        <span className="gradient-text">for developers</span>
      </h1>
      <p className="text-lg leading-normal text-center text-neutral-500 mt-10 max-w-3xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        to reality!
      </p>
      <div className="flex justify-center my-10 space-x-5">
        <Button
          label="Start for free"
          borderColor="border-none"
          backgroundColor="bg-gradient-to-r from-orange-500 to-orange-800"
        />
        <Button label="Documentation" />
      </div>
      <div className="flex justify-center gap-5 mt-10 max-w-4xl">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 mx-2 my-4 shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video.
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 mx-2 my-4 shadow-orange-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>
    </section>
  );
};

export default Hero;
