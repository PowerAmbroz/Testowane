<?php
    //open connection to mysql db
   $connection = mysqli_connect("localhost","root","","test") or die("Error " . mysqli_error($connection));

    //fetch table rows from mysql db
    $sql = "SELECT `Imie`,`Nazwisko`, `Grupa`,`Telefon` FROM `studenci`";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
   //echo json_encode($emparray);

   //write to json file
    $fp = fopen('dane.json', 'w');
    fwrite($fp, json_encode($emparray));
    fclose($fp);
   
    //close the db connection
    mysqli_close($connection);

	?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8"/>
	<meta name="description" content="bramka sms"/>
	<meta name="keywords" content="bramka, sms"/>
	<meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1"/>
	<link rel="stylesheet" href="css/style.css">
		
		</head>
<body>

<table id="example" class="display select" width="100%" cellspacing="0">
   <thead>
      <tr>
         <th><input name="select_all" value="1" type="checkbox"></th>
         <th>Imie</th>
         <th>Nazwisko</th>
         <th>Grupa</th>
         <th>Telefon</th>
      </tr>
   </thead>

</table>


<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css">

<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css">



<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css">

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>

<script src="//cdn.datatables.net/s/dt/dt-1.10.10,se-1.1.0/datatables.min.js" type="text/javascript"></script>

<!--<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>-->
	
<script type="text/javascript" src="tablica.js"></script>

</body>

</html>