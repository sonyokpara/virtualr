import { Navbar, Hero } from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
    </main>
  );
};

export default App;
