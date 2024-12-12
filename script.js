document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = [
      { buttonId: "bed-btn", modalId: "bed-modal" },
      { buttonId: "desk-btn", modalId: "desk-modal" },
      { buttonId: "trash-can-btn", modalId: "trash-modal" },
      { buttonId: "rug-btn", modalId: "rug-modal" },
      { buttonId: "bookshelf-btn", modalId: "bookshelf-modal" },
  ];

  modalTriggers.forEach(({ buttonId, modalId }) => {
      const button = document.getElementById(buttonId);
      const modal = document.getElementById(modalId);
      const close = modal?.querySelector(".close");

      if (button && modal && close) {
          button.addEventListener("click", () => {
              modal.style.display = "block";
          });

          close.addEventListener("click", () => {
              modal.style.display = "none";
          });

          window.addEventListener("click", (event) => {
              if (event.target === modal) {
                  modal.style.display = "none";
              }
          });
      }
  });
});