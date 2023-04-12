// src/strategies/GLView/GLViewStrategy.ts
import React from "react";
import BaseStrategy from "./BaseStrategy";
import TimePeriodDropdown from "../components/TimePeriodDropdown";
import ProductFamilyDropdown from "../components/ProductFamilyDropdown";
import GLDropdown from "../components/GLDropdown";

class GLViewStrategy extends BaseStrategy {
  selectedProductFamily: string | null = null;

  handleSelection(key: string, value: string) {
    if (key === "productFamily") {
      this.selectedProductFamily = value;
    }
    super.handleSelection(key, value);
  }

  isSelectionEnabled(key: string): boolean {
    if (key === "GL") {
      return !!this.selectedProductFamily;
    }
    return true;
  }

  renderSideDrawer() {
    return (
      <>
        <TimePeriodDropdown onSelect={(value) => this.handleSelection("timePeriod", value)} />
        <ProductFamilyDropdown onSelect={(value) => this.handleSelection("productFamily", value)} />
        {this.isSelectionEnabled("GL") && (
          <GLDropdown onSelect={(value) => this.handleSelection("GL", value)} />
        )}
      </>
    );
  }
}

export default GLViewStrategy;
