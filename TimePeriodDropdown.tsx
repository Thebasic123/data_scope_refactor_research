import React from "react";

interface TimePeriodDropdownProps {
  onSelect: (value: string) => void;
}

const TimePeriodDropdown: React.FC<TimePeriodDropdownProps> = ({ onSelect }) => {
  const timePeriods = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Time Period</option>
      {timePeriods.map((period) => (
        <option key={period} value={period}>
          {period}
        </option>
      ))}
    </select>
  );
};

export default TimePeriodDropdown;