// View: toont de boeken en bouwt de lijst opnieuw op bij een wijziging.
const bibliotheekView = {
  toonBoeken: function (boeken, bijLenen) {
    const boekenlijst = document.getElementById("boekenlijst");
    boekenlijst.innerHTML = "";

    boeken.forEach(function (boek) {
      const lijstItem = document.createElement("li");

      const titel = document.createElement("h2");
      titel.textContent = boek.titel;

      const auteur = document.createElement("p");
      auteur.textContent = "Auteur: " + boek.auteur;

      const status = document.createElement("p");
      status.textContent = "Status: " + boek.status;

      lijstItem.append(titel, auteur, status);

      if (boek.status === "Beschikbaar") {
        const leenKnop = document.createElement("button");
        leenKnop.type = "button";
        leenKnop.textContent = "Lenen";
        leenKnop.addEventListener("click", function () {
          // Geef de klik door aan de Controller.
          bijLenen(boek.id);
        });
        lijstItem.append(leenKnop);
      }

      boekenlijst.append(lijstItem);
    });
  }
};
