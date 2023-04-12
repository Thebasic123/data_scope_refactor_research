import React, { useState } from "react";

type GLDropdownProps = {
  onSelect: (value: string) => void;
};

const GLDropdown: React.FC<GLDropdownProps> = ({ onSelect }) => {
  const [selectedGl, setSelectedGl] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedGl(value);
    onSelect(value);
  };

  return (
    <div>
      <label htmlFor="gl-select">GL:</label>
      <select id="gl-select" value={selectedGl} onChange={handleSelect}>
        <option value="">Select GL...</option>
        <option value="GL1">GL1</option>
        <option value="GL2">GL2</option>
        <option value="GL3">GL3</option>
      </select>
    </div>
  );
};

export default GLDropdown;
