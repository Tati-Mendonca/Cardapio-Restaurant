import "./modal.css";

interface InputProps {
  label: string;
  value: number | string | undefined;
  updateValue(value): void
  placeholder: string;
}

export interface ModalProps {
  closeModal(): void;
}

export const Input = ({ label, value, updateValue, placeholder }: InputProps) => {
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


