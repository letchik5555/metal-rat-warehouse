//открывание окна
document.getElementById("open-modl-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.add("open")
})

//закрывание по крестику
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("open")
})

//закрывание по escape
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open")
  }
});

//закрывание при click вне окна
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  //можно было бы написать (event.<любое слово>) - означает, что если происходит клик внутри модального окна, то модальное окно не закрывается, если сделать клик снаружи, то закроется
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

