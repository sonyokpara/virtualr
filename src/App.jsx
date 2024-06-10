import {
  Navbar,
  Hero,
  Feature,
  Workflow,
  Pricing,
  Testimonials,
} from "./sections";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </main>
  );
};

export default App;
