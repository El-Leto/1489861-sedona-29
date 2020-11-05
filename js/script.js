const openForm = document.querySelector(".search-button");
const modalForm = document.querySelector(".modal-search");
const searchForm = document.querySelector(".search-hotel-form");
const arrival = searchForm.querySelector(".arrival");
const leaving = searchForm.querySelector(".leaving");
const adult = searchForm.querySelector(".adult");
const child = searchForm.querySelector(".child");

openForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modalForm.classList.contains("modal-show")) {
    modalForm.classList.remove("modal-show");
    modalForm.classList.remove("modal-shake");
    modalForm.classList.add("modal-close");
    arrival.focus();
  } else {
    modalForm.classList.remove("modal-close");
    modalForm.classList.add("modal-show");
    modalForm.classList.remove("modal-shake");
  }
});

searchForm.addEventListener("submit", function(evt) {
  if (!arrival.value || !leaving.value || !adult.value || !child.value) {
    evt.preventDefault();
    modalForm.classList.remove("modal-shake");
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalForm.classList.add("modal-shake");
    modalForm.classList.remove("modal-show");
    arrival.focus();
 }
});
