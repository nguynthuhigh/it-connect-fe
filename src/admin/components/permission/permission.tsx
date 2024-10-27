import React from "react";
import Popup from "reactjs-popup";
import Crud from "./crud";
interface PermissionProps {
  handleOpenPopup: () => void;
  isOpen: boolean;
  roleID: string;
}
const Permission: React.FC<PermissionProps> = ({
  handleOpenPopup,
  isOpen,
  roleID,
}) => {
  return (
    <Popup
      onClose={() => {
        handleOpenPopup();
      }}
      modal={true}
      open={isOpen}
      overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
      contentStyle={{
        width: "100%",
        background: "white",
        maxWidth: 600,
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Crud roleID={roleID}></Crud>
    </Popup>
  );
};

export default Permission;
