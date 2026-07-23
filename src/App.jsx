//import { useState } from "react";
//import Modal from "./components/Modal";
import "./App.css";
import ServiceCard from "./components/ServiceCard";


function App() {
  /* const [isModalOpen, setIsModalOpen] = useState(false);

  // Opens the modal when it is closed
  // and closes it when it is open.
  function toggleModal() {
    setIsModalOpen((previousState) => !previousState);
  } */
  <br/>
  // Array containing the information for all technology services.
  const services = [
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
  }

  return (
   /*  <main>
      <h1>Reusable Modal Example</h1>

      <button
        type="button"
        className="modal-toggle-button"
        onClick={toggleModal}
      >
        {isModalOpen ? "Close Modal" : "Open Modal"}
      </button>

      <Modal
        isOpen={isModalOpen}
        title="Product Information"
        onClose={toggleModal}
      >
        <p>HP Laptop</p>
        <p>Category: Computers</p>
        <p>Price: ₦450,000</p>
      </Modal>
    </main> */
    
    <main className="app">
      <section className="services-section">
        <h1>Our Technology Services</h1>

        <p className="services-introduction">
          Explore the technology solutions and training programmes we provide.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              buttonText={service.buttonText}
              isAvailable={service.isAvailable}
              onSelect={() => handleServiceSelection(service.title)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;