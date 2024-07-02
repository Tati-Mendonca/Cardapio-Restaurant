import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import { useFoodData } from "./services/useFoodData";
import { CreateModal } from "./components/create-modal/CreateModal";
import Navbar from "./components/navbar/navbar";
import Notfound from "./components/not-found/not-found";
import Footer from "./components/footer/footer";

function App() {
  const { data, isError, isLoading }  = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (): void=> {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar handleOpenModal={handleOpenModal}/>
      <div className="container">
       <h1>Cardápio</h1>
       <div className="error">
        <div className="card-grid">
          {data?.map((foodData, index) => (
            <div key={index}>
              <Card
                price={foodData.price}
                title={foodData.title}
                image={foodData.image} 
              />
            </div>
          ))}
        </div>
        {isLoading && 'carregando...'}
        {isError && <Notfound />}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
