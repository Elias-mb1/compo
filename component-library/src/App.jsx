// App.jsx
import React, { useState } from "react";
import Button from "./button.jsx";
import Alert from "./alert.jsx";
import Badge from "./badge.jsx";
import Card from "./card.jsx";
import Modal from "./modal.jsx";
import { FaCheckCircle } from "react-icons/fa";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Button, Alert, Badge, Card, and Modal Components</h1>

      <div>
        <h2>Button Example</h2>
        <p>Large Button, Blue Color, Enabled</p>
        <Button size="large" color="blue" disabled={false} />
      </div>

      <div>
        <h2>Alert Example</h2>
        <p>Alert with Red Color and Warning Icon</p>
        <Alert color="red" icon="⚠️" />
      </div>

      <div>
        <h2>Badge Example</h2>
        <p>Badge with Green Color, Large Size, and Check Circle Icon</p>
        <Badge color="green" size="2em" icon={<FaCheckCircle />} />
      </div>

      <div>
        <h2>Card Example</h2>
        <p>Card with Placeholder Image</p>
        <Card
          href="https://example.com"
          imgSrc="https://via.placeholder.com/300"
          imgAlt="Placeholder"
        >
          <h3>Placeholder</h3>
          <p>300</p>
        </Card>
      </div>

      <div>
        <h2>Modal Example</h2>
        <p>Click the button to open the modal</p>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal show={isModalOpen} onClose={handleCloseModal} size="medium">
          <Modal.Header>
            <h3>Modal Header</h3>
          </Modal.Header>
          <Modal.Body>
            <p>Modal Body Content</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseModal}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default App;
