//import { useState } from "react";
//import Modal from "./components/Modal";
import "./App.css";
//import ServiceCard from "./components/ServiceCard";
import Counter from "./components/Counter";

function App() {
  /* const [isModalOpen, setIsModalOpen] = useState(false);

  // Opens the modal when it is closed
  // and closes it when it is open.
  function toggleModal() {
    setIsModalOpen((previousState) => !previousState);
  } */
  <br />;
  // Array containing the information for all technology services.
  /* const services = [
    {
      id: 1,
      title: "Cloud Engineering",
      description: "Learn how to deploy and manage cloud infrastructure.",
      icon: "☁️",
      buttonText: "Learn More",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Build responsive websites and modern full-stack applications.",
      icon: "💻",
      buttonText: "View Service",
      isAvailable: true,
    },
    {
      id: 3,
      title: "Cybersecurity",
      description:
        "Protect computer systems, networks, and information from attacks.",
      icon: "🔐",
      buttonText: "Explore",
      isAvailable: false,
    },
    {
      id: 4,
      title: "Data Analytics",
      description:
        "Transform raw data into valuable insights for business decisions.",
      icon: "📊",
      buttonText: "Get Started",
      isAvailable: true,
    },
  ];


  function handleServiceSelection(serviceTitle) {
    alert(`${serviceTitle} selected`);
  } */

  return (
    <main className="app">
      <Counter />
    </main>
  );
}

export default App;
