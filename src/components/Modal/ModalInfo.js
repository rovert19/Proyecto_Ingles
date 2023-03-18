import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalInfo.css";

export const ModalInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn-info">
        <img
          src={require("../../img/Vocabulario/voc_info.png")}
          alt=""
          onClick={handleShow}
          className="btn-info-custom"
        />
      </div>
      <div>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-info-content">
              <p>
                Si presionas sobre la cartilla, se mostrará el significado de la
                palabra
              </p>
              <div className="info-option">
                <span>
                  <img
                    src={require("../../img/Vocabulario/voc_check.png")}
                    alt=""
                  />
                </span>
                <span>Si conoces bien la palabra</span> 
              </div>
              <div className="info-option">
                <span>
                  <img
                    src={require("../../img/Vocabulario/voc_worlin.png")}
                    alt=""
                  />
                </span>
                <span>Si aún está en proceso de aprendizaje</span>
                
              </div>
              <div className="info-option">
                <span>
                  <img
                    src={require("../../img/Vocabulario/voc_x.png")}
                    alt=""
                  />
                </span>
                <span>Si se te hace difícil de recordar el significado</span>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
