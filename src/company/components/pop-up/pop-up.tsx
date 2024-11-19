import React, { ReactNode } from "react";
import { Modal, Button } from "antd";

interface PopupProps {
  visible: boolean;
  onConfirm: () => void;
  titleConfirm: string;
  onCancel: () => void;
  titleCancel: string;
  children: ReactNode;
  title: string;
}

const PopupCustom: React.FC<PopupProps> = ({
  visible,
  onConfirm,
  onCancel,
  children,
  titleConfirm,
  titleCancel,
  title,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          {titleCancel}
        </Button>,
        <Button key="delete" type="primary" danger onClick={onConfirm}>
          {titleConfirm}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default PopupCustom;
