const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const modalWindow = modal.querySelector(".popup-content");

  let count = 0;
  let idInterval;

  const animateModal = () => {
    count++;
    idInterval = requestAnimationFrame(animateModal);
    if (count < 40) {
      modalWindow.style.top = count * 6 + "px";
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.body.clientWidth > 768) {
        modal.style.top = "0px";
        modal.style.display = "block";
        idInterval = requestAnimationFrame(animateModal);
      } else {
        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    count = 0;
    cancelAnimationFrame(idInterval);
    modal.style.display = "none";
  });
};

export default modal;
