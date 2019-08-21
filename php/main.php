<?php
    session_start();
    include 'connect.php';
    $response = array();


    $sql = "SELECT 
    *
    FROM data_table ORDER BY id ASC";

    $result = $conn->query($sql);

    if($result->num_rows>0)
    {
        while($row=$result->fetch_assoc())
        {
            $response[] = $row;
        }
    }
    echo json_encode($response,JSON_FORCE_OBJECT);
    $conn->close();

?>