import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../services/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import { ModalProps, Input } from "./modal";

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(undefined);
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
        
    const foodData: FoodData = {
      title,
      price,
      image,
    };

    if (title.length < 3 || price === undefined) {
      alert("Campo obrigatório está vazio")
      return
    }


    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [closeModal, isSuccess]);

  return (
    <dialog className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div>
            <h2>Adicionar </h2>
          </div>
          <div className="close" onClick={closeModal}>
            &times;
          </div>
        </div>
        
          <form method="dialog" className="input-container">
            <Input
              label="Produto"
              value={title}
              updateValue={setTitle}
              placeholder={"Nome"}
            />
            <Input
              label="Preço"
              value={price || ""}
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
     
    </dialog>
  );
}
