<?php
  $connection_str = "mongodb://localhost:27017";


  $driver_connection = new MongoDB\Driver\Manager($connection_str);
  $insert_data = new MongoDB\Driver\BulkWrite;
  $query_data = new MongoDB\Driver\Query([], ['sort' => ['namer'=> 1]]);
  $connect_arr = array(
    'insert_data' => $insert_data,
    'driver_connection' => $driver_connection,
    'query'=>$query_data
    );

  return $connect_arr;
?>