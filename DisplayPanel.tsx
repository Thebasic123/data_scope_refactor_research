import React from "react";

interface DisplayPanelProps {
  selections: { [key: string]: string };
}

const DisplayPanel: React.FC<DisplayPanelProps> = ({ selections }) => {
  return (
    <div>
      {Object.entries(selections).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    </div>
  );
};

export default DisplayPanel;
