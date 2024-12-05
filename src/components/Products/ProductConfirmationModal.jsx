import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductConfirmationModal = ({ show, onHide, onConfirm, actionType, productName }) => {
  const handleConfirm = () => {
    onConfirm();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{actionType} Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionType === 'Delete'
          ? `Are you sure you want to delete the product: "${productName}"?`
          : `Are you sure you want to ${actionType.toLowerCase()} this product?`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Confirm {actionType}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductConfirmationModal;
