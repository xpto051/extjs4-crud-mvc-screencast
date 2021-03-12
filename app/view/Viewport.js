Ext.define("ExtMVC.view.Viewport", {
  extend: "Ext.container.Viewport",
  requires: ["Ext.layout.container.Fit", "ExtMVC.view.UsersGrid"],

  layout: {
    type: "fit",
  },

  items: [
    {
      xtype: "usersgrid",
    },
  ],
});
