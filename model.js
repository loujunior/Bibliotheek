// Model: bewaart de boeken en verandert hun status.
const bibliotheekModel = {
  boeken: [
    { id: 1, titel: "De brief voor de koning", auteur: "Tonke Dragt", status: "Beschikbaar" },
    { id: 2, titel: "Matilda", auteur: "Ronald Dahl", status: "Beschikbaar" }
  ],

  leenBoek: function (boekId) {
    const boek = this.boeken.find(function (boek) {
      return boek.id === boekId;
    });

    if (boek && boek.status === "Beschikbaar") {
      boek.status = "Uitgeleend";
    }
  }
};
