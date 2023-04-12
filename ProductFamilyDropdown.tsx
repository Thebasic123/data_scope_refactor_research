import React from "react";

interface ProductFamilyDropdownProps {
  onSelect: (value: string) => void;
}

const ProductFamilyDropdown: React.FC<ProductFamilyDropdownProps> = ({ onSelect }) => {
  const productFamilies = ["Family A", "Family B", "Family C"];

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Product Family</option>
      {productFamilies.map((family) => (
        <option key={family} value={family}>
          {family}
        </option>
      ))}
    </select>
  );
};

export default ProductFamilyDropdown;