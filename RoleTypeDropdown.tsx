import React from "react";

interface RoleTypeDropdownProps {
  onSelect: (value: string) => void;
}

const RoleTypeDropdown: React.FC<RoleTypeDropdownProps> = ({ onSelect }) => {
  const roleTypes = ["Vendor-Manager", "Brand-Specialist"];

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Role Type</option>
      {roleTypes.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
};

export default RoleTypeDropdown;
