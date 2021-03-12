Ext.define("ExtMVC.model.User", {
  extend: "Ext.data.Model",

  fields: [
    { name: "_id", type: "string" },
    { name: "name", type: "string" },
    { name: "age", type: "string" },
  ],

  idProperty: "_id", //caso id não seja "id"
});
