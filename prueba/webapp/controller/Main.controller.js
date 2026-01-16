sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.uppersap.prueba.prueba.controller.Main", {
      onInit: function () {
        this._contador = 0;
        this._loadCharacters();
      },

      _loadCharacters: async function () {
        let oModel =
          this.getOwnerComponent().getModel("contadorModel") ||
          this.getView().getModel("contadorModel");

        try {
          // Llamada a la API de Rick and Morty
          const response = await fetch(
            "https://rickandmortyapi.com/api/character"
          );
          const data = await response.json();

          // La API devuelve los personajes en la propiedad 'results'
          const aCharacters = data.results.map((item) => ({
            name: item.name,
            image: item.image,
            race: item.species, // Usamos 'species' como raza
            status: item.status,
            gender: item.gender,
          }));

          oModel.setProperty("/characters", aCharacters);
          MessageToast.show("Personajes del Multiverso cargados");
        } catch (error) {
          MessageToast.show("Error al cargar la nueva API");
          console.error(error);
        }
      },

      contarClic: function (oEvent) {
        this._contador++;
        var sBoton = oEvent.getSource().getText();
        var oTexto = this.getView().byId("textoContador");
        if (oTexto) {
          oTexto.setText("Clics: " + this._contador);
        }
        MessageToast.show(sBoton + " - Clic #" + this._contador);
      },

      onPress: function (oEvent) {
        MessageToast.show("Acción presionada");
      },
    });
  }
);
