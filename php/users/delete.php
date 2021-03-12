<?php
  include('../connect.php');
  $info = $_POST["data"];
  $data = json_decode(stripslashes($info));

  $id = $data->_id;
  $connect_arr["insert_data"]->delete(['_id'=>new MongoDB\BSON\ObjectID($id)]);
  $connect_arr["driver_connection"]->executeBulkWrite('mydb.users', $connect_arr["insert_data"]);
  echo json_encode(array(
    "success" => "deleted"
  ));
?>