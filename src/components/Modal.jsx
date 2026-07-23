// ============================================================
// React Module: Component Composition
// Component: Modal
// ------------------------------------------------------------
// Purpose:
// This reusable component creates a modal container that can
// display different content through React's children prop.
//
// React Concepts Covered:
// • Functional Components
// • Props
// • children Prop
// • Conditional Rendering
// • Event Handling
// • Component Composition
// • Reusable UI Components
//
// Developer Note:
// The children prop allows a parent component to place custom
// JSX between a component's opening and closing tags.
// ============================================================

//import { useState } from 'react'
function Modal({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}) {
  // ==========================================================
  // React Topic: Conditional Rendering
  // When isOpen is false, the component returns null.
  // Returning null means React renders nothing on the screen.
  // ==========================================================
  if (!isOpen) {
    return null;
  }

  return (
    // ========================================================
    // The overlay covers the page behind the modal.
    // Clicking the overlay calls the onClose callback.
    // ========================================================
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      {/* =====================================================
          React Topic: Event Propagation

          stopPropagation prevents a click inside the modal
          from reaching the overlay and closing the modal.
      ====================================================== */}
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>

          {/* React Topic: Event Handling
              The close button calls the function supplied
              by the parent component through the onClose prop.
          */}
          
        </div>

        {/* ===================================================
            React Topic: children Prop

            React automatically places any JSX written between
            <Modal> and </Modal> inside the children prop.

            This makes the modal reusable because each parent
            can provide completely different custom content.
        ==================================================== */}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;