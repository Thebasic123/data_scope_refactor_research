import React, { useState } from "react";
import GLDropdown from "./GLDropdown";
import BaseStrategy from "../strategies/BaseStrategy";
import GLViewStrategy from "../strategies/GLViewStrategy";
import TimePeriodDropdown from "./TimePeriodDropdown";
import ProductFamilyDropdown from "./ProductFamilyDropdown";

export interface GLViewScopeSelectionProps {
  strategy: GLViewStrategy;
}

export const GLViewScopeSelection: React.FC<GLViewScopeSelectionProps> = ({
  strategy,
}) => {
  const [selectedGL, setSelectedGL] = useState("");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("");
  const [selectedProductFamily, setSelectedProductFamily] = useState("");

  const handleGLSelection = (gl: string) => {
    setSelectedGL(gl);
    strategy.handleSelection("GL", gl);
  };

  const handleTimePeriodSelection = (timePeriod: string) => {
    setSelectedTimePeriod(timePeriod);
    strategy.handleSelection("Time Period", timePeriod);
  };

  const handleProductFamilySelection = (productFamily: string) => {
    setSelectedProductFamily(productFamily);
    strategy.handleSelection("Product Family", productFamily);
  };

  return (
    <div>
      <h3>GL View Scope Selection</h3>
      <GLDropdown onSelect={handleGLSelection}/>
      <TimePeriodDropdown onSelect={handleTimePeriodSelection} />
      <ProductFamilyDropdown onSelect={handleProductFamilySelection} />
    </div>
  );
};

export default GLViewScopeSelection;

