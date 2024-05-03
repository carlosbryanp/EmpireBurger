// OpenToWork
export default function isOpen() {
  const open = document.querySelector(".hours");
  const dataAtual = new Date();
  const day = dataAtual.getDay();
  const hours = dataAtual.getHours();

  switch (day) {
    case 0:
      if (hours >= 18 && hours < 23) {
        open.style.backgroundColor = "rgb(31, 228, 31)";
      }
      break;
    case 6:
      if (hours >= 18 && hours < 23) {
        open.style.backgroundColor = "rgb(31, 228, 31)";
      }
      break;
    default:
      if (hours >= 17 && hours < 23) {
        open.style.backgroundColor = "rgb(31, 228, 31)";
      }
  }
}
