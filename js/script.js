document.getElementById("buy-now-btn").addEventListener("click", function () {
  const penguinsId = document.getElementById("penguins");
  penguinsId.innerText = "I Am Penguins";
});

document
  .getElementById("penguins-sections")
  .addEventListener("mouseleave", function () {
    const offterOFF = document.getElementById("offer");
    offterOFF.innerHTML = `
    <h1 class="animate-pulse text-5xl bg-red-500 px-72 py-10 rounded-lg text-white font-bold">UP TO 75% SALE</h1>
    `;
  });
