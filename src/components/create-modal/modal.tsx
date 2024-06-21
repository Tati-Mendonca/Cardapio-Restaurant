import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
  placeholder: string;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue, placeholder }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
    };

    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [closeModal, isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Adicionar produto </h2>
        </div>
        <form action="" className="input-container">
          <Input
            label="Produto"
            value={title}
            updateValue={setTitle}
            placeholder={"Nome"}
          />
          <Input
            label="Preço"
            value={price}
            updateValue={setPrice}
            placeholder={"00,00"}
          />
          <Input
            label="Imagem"
            value={image}
            updateValue={setImage}
            placeholder={"Insira a URL da imagem"}
          />
          <button onClick={submit} className="btn-secondary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
