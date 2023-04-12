// src/components/TeamViewScopeSelection.tsx
import React from 'react';
import ScopeSelection from './ScopeSelection';
import TeamViewStrategy from '../strategies/TeamViewStrategy';

export interface TeamViewScopeSelectionProps {
  strategy: TeamViewStrategy;
}

export const TeamViewScopeSelection: React.FC<TeamViewScopeSelectionProps> = (props) => {
  const strategy = new TeamViewStrategy();

  return (
    <div>
      TeamViewScopeSelection component
    </div>
  );
};

export default TeamViewScopeSelection;
