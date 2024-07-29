import { useState } from "react";
import { AddCategory, GifGrid } from "./GifExpertApp/components";

export function GifExpertApp() {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onSetCategory={addCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
