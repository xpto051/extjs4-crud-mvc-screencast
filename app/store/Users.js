Ext.define("ExtMVC.store.Users", {
  extend: "Ext.data.Store",

  model: "ExtMVC.model.User",

  //pageSize: 20,

  proxy: {
    type: "ajax",
    //url: "php/users/getUsers.php",

    api: {
      create: "php/users/insert.php",
      read: "php/users/getUsers.php",
      update: "php/users/edit.php",
      destroy: "php/users/delete.php",
    },

    reader: {
      type: "json",
      root: "users",
    },

    writer: {
      type: "json",
      root: "data",
      encode: true,
    },
    /* 

		reader: {
			type: 'json',
			root: 'data'
		},

		 */
  },

  autoLoad: true,
});
