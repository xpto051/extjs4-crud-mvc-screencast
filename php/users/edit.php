<?php
  include('../connect.php');
  $info = $_POST["data"];
  $data = json_decode(stripcslashes($info));

  $person_name = $data->name;
  $person_age = $data->age;
  $id = $data->_id;
  $edit_arr = array();
  $filter = ['_id' => new MongoDB\BSON\ObjectID($id)];
  $query = new MongoDB\Driver\Query($filter);
  $result = $connect_arr["driver_connection"]->executeQuery('mydb.users', $query);
  $fetch = current($result->toArray());
  ECHO $fetch;
  $edit_arr = array("data" => array("name"=>$fetch->name,"age"=>$fetch->age,"g"=>$id));
  echo json_encode($edit_arr);
?>