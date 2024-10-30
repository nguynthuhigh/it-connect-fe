import React from "react";
import Popup from "reactjs-popup";
import SetRole from "./set-role";
interface UserRoleProps {
  handleOpenPopup: () => void;
  isOpen: boolean;
  userID: string;
}
const UserRole: React.FC<UserRoleProps> = ({
  handleOpenPopup,
  isOpen,
  userID,
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
      <SetRole userID={userID}></SetRole>
    </Popup>
  );
};

export default UserRole;
