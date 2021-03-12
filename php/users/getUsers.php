<?php
  include('../connect.php');
  $rows = array('users' =>array());

  $query = new MongoDB\Driver\Query([]);

  $cursor = $connect_arr["driver_connection"]->executeQuery('mydb.users', $query);

  foreach ($cursor as $document) {
    $format_json = array(
      "_id" => (string)$document->{'_id'},
      "name" => $document->name,
      "age" => $document->age
    );
    $rows['users'][] = $format_json;
  }

  echo json_encode($rows);
?>