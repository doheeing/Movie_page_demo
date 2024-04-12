import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalWatch from "../MovieWatch/MovieWatch";
import "./MovieModal.style.css";

const MovieModal = ({ video }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="detail-watch-btn" onClick={handleShow}>
        Watch the trailer
      </Button>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          dialogClassName="modal-90w"
          contentClassName="modal-style"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <ModalWatch video={video} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MovieModal;
