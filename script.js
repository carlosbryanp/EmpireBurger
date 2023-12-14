// OpenToWork
function isOpen() {
  const open = document.querySelector('.hours');
  var dataAtual = new Date();
  var day = dataAtual.getDay();
  var hours = dataAtual.getHours();

  switch (day) {
    case 0:
      if (hours >= 18 && hours < 23) {
        open.style.backgroundColor = 'rgb(31, 228, 31)'
      }
      break
      case 6:
        if (hours >= 18 && hours < 23) {
          open.style.backgroundColor = 'rgb(31, 228, 31)'
        }
        break
        default:
          if (hours >= 17 && hours < 23) {
            open.style.backgroundColor = 'rgb(31, 228, 31)'
          }
  }
}

isOpen();


