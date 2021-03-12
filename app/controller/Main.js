Ext.define("ExtMVC.controller.Main", {
  extend: "Ext.app.Controller",

  models: ["ExtMVC.model.User"],

  stores: ["ExtMVC.store.Users"],

  views: ["ExtMVC.view.UsersGrid", "ExtMVC.view.UsersForm"],

  init: function (application) {
    this.control({
      usersgrid: {
        render: this.onGridRender,
        itemdblclick: this.onEditClick,
      },
      "usersgrid button#add": {
        click: this.onAddClick,
      },
      "usersform button#cancel": {
        click: this.onCancelClick,
      },
      "usersgrid button#delete": {
        click: this.onDeleteClick,
      },
      "usersform button#save": {
        click: this.onSaveClick,
      },
    });
  },

  onGridRender: function (grid, eOpts) {
    grid.getStore().load();
  },

  openForm: function (title) {
    var win = Ext.create("ExtMVC.view.UsersForm");

    win.setTitle(title);

    return win;
  },

  onAddClick: function (btn, e, eOpts) {
    this.openForm("Novo User");
  },
  onEditClick: function (grid, record, item, index, e, eOpts) {
    var win = this.openForm("Editar User - " + record.get("name"));

    var form = win.down("form");

    form.loadRecord(record);
  },
  onCancelClick: function (btn, e, eOpts) {
    var win = btn.up("window");

    var form = win.down("form");

    form.getForm().reset();

    win.close();
  },

  onDeleteClick: function (btn, e, eOpts) {
    var grid = btn.up("grid");

    var records = grid.getSelectionModel().getSelection();

    var store = grid.getStore();

    store.remove(records);

    store.sync();
  },
  onSaveClick: function (btn, e, eOpts) {
    var win = btn.up("window"),
      form = win.down("form"),
      values = form.getValues(),
      record = form.getRecord(),
      grid = Ext.ComponentQuery.query("usersgrid")[0],
      store = grid.getStore();

    if (record) {
      //edicao

      record.set(values);
    } else {
      //novo registro

      var contato = Ext.create("ExtMVC.model.User", {
        name: values.name,
        age: values.age,
      });

      store.insert(0, contato);
    }

    store.sync();

    win.close();
  },
});
