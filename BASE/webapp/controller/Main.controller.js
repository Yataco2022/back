sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Label",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/comp/smartvariants/PersonalizableInfo",
  ],
  function (
    Controller,
    JSONModel,
    Label,
    Filter,
    FilterOperator,
    PersonalizableInfo
  ) {
    "use strict";

    return Controller.extend("com.uppersap.prueba.prueba.controller.Main", {
      onInit: function () {
        this.oSmartVariantManagement = this.getView().byId("svm");
        this.oFilterBar = this.getView().byId("filterbar");

        if (this.oSmartVariantManagement) {
          var oPersInfo = new PersonalizableInfo({
            type: "filterBar",
            keyName: "persistencyKey",
            control: this.oFilterBar,
          });
          this.oSmartVariantManagement.addPersonalizableControl(oPersInfo);
          this.oSmartVariantManagement.initialise(function () {},
          this.oFilterBar);
        }
      },

      // Funciones requeridas por el control FilterBar del SDK
      fetchData: function () {
        return [];
      },
      applyData: function () {},
      getFiltersWithValues: function () {
        return [];
      },
      onSearch: function () {
        sap.m.MessageToast.show("Buscando...");
      },
    });
  }
);
