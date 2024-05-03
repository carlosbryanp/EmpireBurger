import isOpen from "./modules/funcionamento.js";

isOpen();

const menu = document.querySelectorAll(".price");

menu.forEach((valor) => {
  let price;

  price = +valor.innerHTML;
  // valor.innerHTML = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  valor.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(price);
});

(async function getCardapio() {
  try {
    const rawCardapio = await fetch("https://api.brchallenges.com/api/empire-burger/menu");
    const cardapio = await rawCardapio.json();
    renderCardapio(cardapio);
  } catch (error) {
    console.log(error);
  }
})();

function renderCardapio(cardapio) {
  cardapio.forEach((element) => {
    let template = `
    <div class="menu-item">
      <div class="brown-xxl"">
        <h4 class="font-1-s">${element.plate}</h4>
        <div class="trace"></div>
        <span class="font-1-s">${new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(element.price)}</span>
        </div>
        <p class="font-2-xs white-l">${element.ingredients}</p>
    </div>`;

    document.querySelector(".menu-content").innerHTML += template;
  });
}
