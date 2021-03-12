Ext.define("ExtMVC.view.UsersForm", {
  extend: "Ext.window.Window",
  alias: "widget.usersform",

  height: 200,
  width: 350,
  layout: "fit",
  iconCls: "icon-user",
  title: "Editar/Criar Contato",
  autoShow: true,

  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      defaults: {
        anchor: "100%",
      },
      items: [
        {
          xtype: "hiddenfield",
          name: "_id",
        },
        {
          xtype: "textfield",
          name: "name",
          fieldLabel: "Nome",
        },
        {
          xtype: "textfield",
          name: "age",
          fieldLabel: "age",
        },
      ],
    },
  ],
  dockedItems: [
    {
      xtype: "toolbar",
      dock: "bottom",
      layout: {
        type: "hbox",
        pack: "end",
      },
      items: [
        {
          xtype: "button",
          text: "Cancelar",
          itemId: "cancel",
          iconCls: "icon-reset",
        },
        {
          xtype: "button",
          text: "Salvar",
          itemId: "save",
          iconCls: "icon-save",
        },
      ],
    },
  ],
});
