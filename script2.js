(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    sendModalBtn: document.querySelector("[data-modal-send]"),

    openPopup: document.querySelector("[popup-send]"),
    closePopup: document.querySelector("[popup-close]"),

    openPopup2: document.querySelector("[popup2-send]"),
    closePopup2: document.querySelector("[popup2-close]"),

    modal: document.querySelector("[data-modal]"),

    subscribeBtn: document.querySelector("[explore-sub]"),
    openPopup3: document.querySelector("[popup3-send]"),
    closePopup3: document.querySelector("[popup3-close]"),
    submitPopup3: document.querySelector("[popup3-submit]"),

    openReviewBtn: document.querySelector("[review-send]"),
    closeReviewBtn: document.querySelector("[data-modal-close2]"),
    sendReviewBtn: document.querySelector("[data-review-send]"),
    modal2: document.querySelector("[data-modal2]"),
  };




  const myForm = document.getElementById('review-form');

  myForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const form = this;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    refs.modal2.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    console.log("sendReview")
    openPopup2();
    setTimeout(hidePopup2, 4000)
    clearForm();


    console.log('Form submission prevented. Handling with custom JavaScript.');

  });


  const myForm2 = document.getElementById('modal-form');

  myForm2.addEventListener('submit', function (event) {

    event.preventDefault();

    const form = this;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    console.log("sendModal")
    openPopup();
    setTimeout(hidePopup, 3000)
    clearForm();


    console.log('Form submission prevented. Handling with custom JavaScript.');

  });

  const myForm3 = document.getElementById('popup3-form');

  myForm3.addEventListener('submit', function (event) {

    event.preventDefault();

    const form = this;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

     refs.openPopup3.classList.add("hidden");
    console.log("popup3IsClosing")
    clearForm();
    
    toggleOverlay();


    console.log('Form submission prevented. Handling with custom JavaScript.');

  });

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  // refs.sendModalBtn.addEventListener("click", sendModal);
  refs.closePopup.addEventListener("click", hidePopup);

  refs.closePopup2.addEventListener("click", hidePopup2);



  refs.openReviewBtn.addEventListener("click", toggleReview);
  refs.closeReviewBtn.addEventListener("click", toggleReview);
  // refs.sendReviewBtn.addEventListener("click", sendReview);

  refs.subscribeBtn.addEventListener("click", popup3open);
  refs.closePopup3.addEventListener("click", popup3close);
  // refs.submitPopup3.addEventListener("click", popup3close);



  function popup3open() {
    refs.openPopup3.classList.remove("hidden");
    console.log("popup3IsOpening")
  }

  function popup3close() {
    refs.openPopup3.classList.add("hidden");
    console.log("popup3IsClosing")
    clearForm();
    
    toggleOverlay();
  }

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

  function toggleReview() {
    refs.modal2.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    console.log("reviewisToggling")
  }

  function sendReview() {
    refs.modal2.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    console.log("sendReview")
    openPopup2();
    setTimeout(hidePopup2, 4000)
    clearForm();

  }


  function hidePopup() {
    refs.openPopup.classList.add("hidden");
    console.log("popupIsHiding")
    toggleOverlay();
  }

  function openPopup() {
    refs.openPopup.classList.remove("hidden");
    console.log("popupIsOpening");
    toggleOverlay();
  }


  function hidePopup2() {
    refs.openPopup2.classList.add("hidden");
    console.log("popup2IsHiding")
    toggleOverlay();
  }

  function openPopup2() {
    refs.openPopup2.classList.remove("hidden");
    console.log("popup2IsOpening");
    toggleOverlay();
  }

  function isPopupVisible() {
    return [...document.querySelectorAll('.overlay_presence')].some(popup =>
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
    document.getElementById('name2').value = '';
    document.getElementById('email2').value = '';
    document.getElementById('tel2').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('comment2').value = '';
    document.getElementById('subscribe-email').value = '';

  }

  document.addEventListener('DOMContentLoaded', toggleOverlay);
  document.addEventListener('click', toggleOverlay);



})();


