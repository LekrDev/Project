<?php
    include "connect.php";
   
    $data1 = explode(",", $_POST["data1"]);
    $data2 = explode(",", $_POST["data2"]);
    
   
    
    for($x = 0; $x <= count($data1)-1; $x++)
    {
        $sql = "INSERT INTO data_table (data1, data2) VALUES (".$data1[$x].",".$data2[$x].")";
        if($conn->query($sql)==TRUE)
        {
            
        }
    }
    echo "[{}]";
    $conn->close();
    
?>