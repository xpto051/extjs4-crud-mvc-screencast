<?php
  include('../connect.php');
  $info = $_POST["data"];
  $data = json_decode(stripslashes($info));
  $person_name = $data->name;
  $person_age = $data->age;
  $unique_id = new MongoDB\BSON\ObjectID;

    $insert_data_array = array(
      '_id' => $unique_id,
      'name' => $person_name,
      'age' => $person_age
    );

    $connect_arr["insert_data"]->insert($insert_data_array);
    $connect_arr["driver_connection"]->executeBulkWrite('mydb.users', $connect_arr["insert_data"]);
    echo json_encode(array(
      "success" => "True",
      "data" => array(
        "_id" => (string)$unique_id,
        "name" => $person_name,
        "age" => $person_age
      )
    ));
  
?>