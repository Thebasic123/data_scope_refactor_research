import React, { useState } from "react";
import DisplayPanel from "./DisplayPanel";
import SideDrawer from "./SideDrawer";
import BaseStrategy from "../strategies/BaseStrategy";

interface ScopeSelectionProps {
  strategy: BaseStrategy;
}

const ScopeSelection: React.FC<ScopeSelectionProps> = ({ strategy }) => {
  const [selections, setSelections] = useState<{ [key: string]: string }>({});

  const handleSelection = (key: string, value: string) => {
    setSelections({ ...selections, [key]: value });
    strategy.handleSelection(key, value);
  };

  strategy.setSelectionHandler(handleSelection);

  return (
    <div>
      <DisplayPanel selections={selections} />
      <SideDrawer renderContent={strategy.renderSideDrawer} />
    </div>
  );
};

export default ScopeSelection;
