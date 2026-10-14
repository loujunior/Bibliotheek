// Controller: verwerkt de leenactie en verbindt Model en View.
function verwerkLenen(boekId) {
  bibliotheekModel.leenBoek(boekId);
  bibliotheekView.toonBoeken(bibliotheekModel.boeken, verwerkLenen);
}

// Toon de beginstatus zodra de pagina is geladen.
bibliotheekView.toonBoeken(bibliotheekModel.boeken, verwerkLenen);
