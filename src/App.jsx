import { Navbar, Hero, Feature, Workflow } from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
      </div>
    </main>
  );
};

export default App;
