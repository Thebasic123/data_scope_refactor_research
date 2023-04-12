// src/components/CategoryViewScopeSelection.tsx
import React from 'react';
import ScopeSelection from './ScopeSelection';
import CategoryViewStrategy from '../strategies/CategoryViewStrategy';

export interface CategoryViewScopeSelectionProps {
  strategy: CategoryViewStrategy;
}

export const CategoryViewScopeSelection: React.FC<CategoryViewScopeSelectionProps> = (props) => {
  const strategy = new CategoryViewStrategy();

  return (
    <div>
      CategoryViewScopeSelection component
    </div>
  );
};

export default CategoryViewScopeSelection;
