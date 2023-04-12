import React from "react";

interface CategoryDropdownProps {
  onSelect: (value: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ onSelect }) => {
  const categories = ["Category A", "Category B", "Category C"];

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
