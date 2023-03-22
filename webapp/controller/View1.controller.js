sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.rizing.ad.zprojectsample.controller.View1", {
            onInit: function () {

            },
            onSearch: function () {
                var aTableFilters = this.getView().byId("filterbar").getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {

                    var oControl = oFilterGroupItem.getControl(),

                        sValue = oControl.getValue(),

                        // aFilters = aSelectedKeys.map(function (sSelectedKey) {

                        //     return new Filter({

                        //         path: oFilterGroupItem.getName(),

                        //         operator: FilterOperator.Contains,

                        //         value1: sSelectedKey

                        //     });

                        // });

                        aFilters = [];



                    aFilters.push(new Filter({

                        path: oFilterGroupItem.getName(),

                        operator: FilterOperator.Contains,

                        value1: sValue

                    }));



                    if (sValue !== "") {

                        aResult.push(new Filter({

                            filters: aFilters,

                            and: false

                        }));

                    }



                    return aResult;

                }, []);

                this.getView().byId("tblCustomers").getBinding("items").filter(aTableFilters);
                // this.oTable.setShowOverlay(false);
            },
            onPress : function(onEvent){
                alert("Hi sajiii");
            },
        });
    });
