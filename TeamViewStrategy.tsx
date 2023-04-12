import React from "react";
import BaseStrategy from "./BaseStrategy";
import TimePeriodDropdown from "../components/TimePeriodDropdown";
import RoleTypeDropdown from "../components/RoleTypeDropdown";

class TeamViewStrategy extends BaseStrategy {
  renderSideDrawer() {
    return (
      <>
        <TimePeriodDropdown onSelect={(value) => this.handleSelection("timePeriod", value)} />
        <RoleTypeDropdown onSelect={(value) => this.handleSelection("roleType", value)} />
      </>
    );
  }
}

export default TeamViewStrategy;
