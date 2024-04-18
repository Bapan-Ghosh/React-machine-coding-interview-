import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="main">
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Modal Title</h2>
              <button onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              {/* Insert your large amount of text here */}
              {/* You can use a <p> tag or any other suitable element */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quibusdam deleniti saepe facilis magnam? Fugiat ipsa aperiam
                eveniet excepturi sapiente quos molestiae, assumenda praesentium
                nostrum voluptatibus, nesciunt ea. Modi cum doloribus inventore
                ad, debitis error, blanditiis quaerat iusto cupiditate libero
                voluptatum magni eum commodi quibusdam ipsam omnis optio esse
                consectetur qui labore voluptate dolores mollitia voluptatibus.
                Quae fugit ratione quod nisi aperiam fugiat ipsa, eveniet
                reiciendis quos laboriosam, maiores nobis quaerat nam atque
                incidunt autem. Placeat iusto minus earum dolorem iure. Illo
                perferendis ullam laudantium minima officiis porro, sequi
                ratione optio veritatis corporis quia dolor voluptatem cum
                nostrum iusto fugiat! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam quibusdam deleniti saepe facilis magnam?
                Fugiat ipsa aperiam eveniet excepturi sapiente quos molestiae,
                assumenda praesentium nostrum voluptatibus, nesciunt ea. Modi
                cum doloribus inventore ad, debitis error, blanditiis quaerat
                iusto cupiditate libero voluptatum magni eum commodi quibusdam
                ipsam omnis optio esse consectetur qui labore voluptate dolores
                mollitia voluptatibus. Quae fugit ratione quod nisi aperiam
                fugiat ipsa, eveniet reiciendis quos laboriosam, maiores nobis
                quaerat nam atque incidunt autem. Placeat iusto minus earum
                dolorem iure. Illo perferendis ullam laudantium minima officiis
                porro, sequi ratione optio veritatis corporis quia dolor
                voluptatem cum nostrum iusto fugiat!
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
