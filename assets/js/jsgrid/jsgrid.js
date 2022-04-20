(function ($) {
  "use strict";
  $("#basicScenario").jsGrid({
    width: "100%",
    filtering: true,
    editing: true,
    inserting: true,
    sorting: true,
    paging: true,
    autoload: true,
    pageSize: 10,
    pageButtonCount: 5,
    deleteConfirm: "Do you really want to delete the client?",
    controller: db,
    fields: [
      { name: "Programa", type: "text", width: 120 },
      { name: "Municipio", type: "text", width: 110 },
      {
        name: "Conservação",
        type: "text",
        width: 90,
        filtering: false,
      },
      {
        name: "Saneamento <br> <span style='font-size: 9px'> B áreas | Intervenção </span>",
        type: "text",
        width: 90,
        filtering: false,
      },
      {
        name: "Restauração <br> <span style='font-size: 9px'> B áreas | Intervenção </span>",
        type: "text",
        width: 90,
        filtering: false,
      },
      {
        name: "Boas práticas <br> <span style='font-size: 9px'> B áreas | Intervenção </span>",
        type: "text",
        width: 90,
        filtering: false,
      },
      {
        name: "Cercamento <br> <span style='font-size: 9px'> B áreas | Intervenção </span>",
        type: "text",
        width: 90,
        filtering: false,
      },

      { name: "Parceiros", type: "text", width: 100 },
      { name: "Patrocinadores", type: "text", width: 100 },

      { type: "control" },
    ],
  });
  $("#sorting-table").jsGrid({
    height: "400px",
    width: "100%",
    autoload: true,
    selecting: false,
    controller: db,
    fields: [
      { name: "Name", type: "text", width: 150 },
      { name: "Last", type: "text", width: 150 },
      { name: "Age", type: "number", width: 50 },
      { name: "Address", type: "text", width: 200 },
      {
        name: "Country",
        type: "select",
        items: db.countries,
        valueField: "Id",
        textField: "Name",
      },
      { name: "Married", type: "checkbox", title: "Is Married" },
    ],
  });

  $("#sort").click(function () {
    var field = $("#sortingField").val();
    $("#sorting-table").jsGrid("sort", field);
  });
  $("#batchDelete").jsGrid({
    width: "100%",
    autoload: true,
    confirmDeleting: false,
    paging: true,
    controller: {
      loadData: function () {
        return db.clients;
      },
    },
    fields: [
      {
        headerTemplate: function () {
          return $("<button>")
            .attr("type", "button")
            .text("Delete")
            .addClass("btn btn-danger btn-sm btn-delete mb-0")
            .click(function () {
              deleteSelectedItems();
            });
        },
        itemTemplate: function (_, item) {
          return $("<input>")
            .attr("type", "checkbox")
            .prop("checked", $.inArray(item, selectedItems) > -1)
            .on("change", function () {
              $(this).is(":checked") ? selectItem(item) : unselectItem(item);
            });
        },
        align: "center",
        width: 50,
      },
      { name: "Name", type: "text", width: 150 },
      { name: "Age", type: "number", width: 50 },
      { name: "Address", type: "text", width: 200 },
    ],
  });
  var selectedItems = [];
  var selectItem = function (item) {
    selectedItems.push(item);
  };
  var unselectItem = function (item) {
    selectedItems = $.grep(selectedItems, function (i) {
      return i !== item;
    });
  };
  var deleteSelectedItems = function () {
    if (!selectedItems.length || !confirm("Are you sure?")) return;
    deleteClientsFromDb(selectedItems);
    var $grid = $("#batchDelete");
    $grid.jsGrid("option", "pageIndex", 1);
    $grid.jsGrid("loadData");
    selectedItems = [];
  };
  var deleteClientsFromDb = function (deletingClients) {
    db.clients = $.map(db.clients, function (client) {
      return $.inArray(client, deletingClients) > -1 ? null : client;
    });
  };
})(jQuery);
