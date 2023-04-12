import React from "react";
import BaseStrategy from "./BaseStrategy";
import TimePeriodDropdown from "../components/TimePeriodDropdown";
import ProductFamilyDropdown from "../components/ProductFamilyDropdown";
import GLDropdown from "../components/GLDropdown";
import CategoryDropdown from "../components/CategoryDropdown";

class CategoryViewStrategy extends BaseStrategy {
  selectedProductFamily: string | null = null;
  selectedGL: string | null = null;

  handleSelection(key: string, value: string) {
    if (key === "productFamily") {
      this.selectedProductFamily = value;
    } else if (key === "GL") {
      this.selectedGL = value;
    }
    super.handleSelection(key, value);
  }

  isSelectionEnabled(key: string): boolean {
    if (key === "GL") {
      return !!this.selectedProductFamily;
    } else if (key === "category") {
      return !!this.selectedGL;
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
        {this.isSelectionEnabled("category") && (
          <CategoryDropdown onSelect={(value) => this.handleSelection("category", value)} />
        )}
      </>
    );
  }
}

export default CategoryViewStrategy;
