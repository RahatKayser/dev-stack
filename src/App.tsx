import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechnologySection from "./components/technology-section";
import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);



  const handleAddToStack = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };




  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack!`);
    }
  };



  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <Hero />

      <TechnologySection
        technologies={technologies}
        onAdd={handleAddToStack}
        stack={stack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
