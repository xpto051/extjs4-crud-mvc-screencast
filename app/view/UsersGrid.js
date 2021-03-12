Ext.define("ExtMVC.view.UsersGrid", {
  extend: "Ext.grid.Panel",
  alias: "widget.usersgrid",

  store: "ExtMVC.store.Users",

  title: "Users",

  iconCls: "icon-grid",

  columns: [
    {
      text: "ID",
      width: 35,
      dataIndex: "_id",
    },
    {
      text: "Nome",
      width: 170,
      flex: 1,
      dataIndex: "name",
    },
    {
      text: "age",
      width: 35,
      dataIndex: "age",
    },
  ],

  dockedItems: [
    {
      xtype: "toolbar",
      dock: "top",
      items: [
        {
          xtype: "button",
          text: "Novo",
          itemId: "add",
          iconCls: "icon-add",
        },
        {
          xtype: "button",
          text: "Excluir",
          itemId: "delete",
          iconCls: "icon-delete",
        },
      ],
    },
    {
      xtype: "pagingtoolbar",
      store: "ExtMVC.store.Users",
      dock: "top",
      displayInfo: true,
      emptyMsg: "Nenhum user encontrado",
    },
  ],
});
