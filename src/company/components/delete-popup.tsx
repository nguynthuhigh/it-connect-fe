import React from 'react';
import { Modal, Button } from 'antd';

// Định nghĩa interface cho props
interface DeleteConfirmPopupProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmPopup: React.FC<DeleteConfirmPopupProps> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      title="Deleta This Job Post"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="delete" type="primary" danger onClick={onConfirm}>
          Delete
        </Button>,
      ]}
    >
      <p>Do you want to delete this job post?</p>
    </Modal>
  );
};

export default DeleteConfirmPopup;
