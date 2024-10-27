import { Switch } from "antd";
import React from "react";

interface CustomSwitchProps {
  name: string;
  resource: string;
  isEnabled: boolean;
  toggleAction: (resource: string, action: string) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  name,
  resource,
  isEnabled,
  toggleAction,
}) => {
  const handleToggle = () => {
    console.log(`Toggling ${name} for resource ${resource}`);
    toggleAction(resource, name);
  };

  return (
    <div>
      <h1>{name}</h1>
      <Switch checked={isEnabled} onChange={handleToggle} />
    </div>
  );
};

export default CustomSwitch;
