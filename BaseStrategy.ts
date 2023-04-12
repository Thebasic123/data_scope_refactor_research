import React from "react";

abstract class BaseStrategy {
  protected selectionHandler: (key: string, value: string) => void = () => {};

  setSelectionHandler(handler: (key: string, value: string) => void) {
    this.selectionHandler = handler;
  }

  handleSelection(key: string, value: string) {
    if (this.isSelectionEnabled(key)) {
      this.selectionHandler(key, value);
    }
  }

  // Default implementation, should be overridden in derived classes if needed
  isSelectionEnabled(_key: string): boolean {
    return true;
  }

  // To be implemented in derived classes
  abstract renderSideDrawer(): JSX.Element;
}

export default BaseStrategy;
