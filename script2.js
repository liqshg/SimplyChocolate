(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    sendModalBtn: document.querySelector("[data-modal-send]"),
    openPopup: document.querySelector("[popup-send]"),
    closePopup: document.querySelector("[popup-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.sendModalBtn.addEventListener("click", sendModal);
  refs.closePopup.addEventListener("click", hidePopup)

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    console.log("ourPopupIsToggling")
  }

  function sendModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    console.log("sendModal")
    openPopup();
    setTimeout(hidePopup, 3000)
    clearForm();
    
  }

  function hidePopup() {
    refs.openPopup.classList.add("hidden");
    console.log("popupIsHiding")
    toggleOverlay();
  }

  function openPopup() {
    refs.openPopup.classList.remove("hidden");
    console.log("popupIsOpening")
  }


  function isPopupVisible() {
    return [...document.querySelectorAll('.popup')].some(popup =>
      window.getComputedStyle(popup).display !== 'none'
    );
  }

  window.toggleOverlay = function () {
    document.querySelector('.popup_overlay').style.display = isPopupVisible() ? 'block' : 'none';

  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('num').value = '';
    document.getElementById('comment').value = '';

  }

  document.addEventListener('DOMContentLoaded', toggleOverlay);
  document.addEventListener('click', toggleOverlay);



})();


