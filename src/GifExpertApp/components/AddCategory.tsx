import { SyntheticEvent, useState } from "react";

interface AddCategoryProps {
  onSetCategory: (category: string) => void;
}

export const AddCategory = ({ onSetCategory }: AddCategoryProps) => {
  const [input, setInput] = useState("");
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
  };
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length === 0) return;
    onSetCategory(input.trim());
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type to search"
        value={input}
        onChange={onInputChange}
      />
    </form>
  );
};
