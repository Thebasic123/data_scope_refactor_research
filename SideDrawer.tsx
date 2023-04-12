import React from "react";

interface SideDrawerProps {
  renderContent: () => JSX.Element;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ renderContent }) => {
  return (
    <div>
      <h3>Selections</h3>
      {renderContent()}
    </div>
  );
};

export default SideDrawer;
