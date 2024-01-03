<?
//  create associative array that will be JSON encoded as the callback
/*
$return_arr = array();

// initiate the error to false
$return_arr['error'] = "false";

// store the variables
$username = $_POST['username'];
$password = $_POST['password'];

include("connectToDB.inc.php");
if ($username == "" OR $password == "") {
	$return_arr['error'] = "true";
	$return_arr['message'] = "Error. Please fill in all fields.";
} else {
	//$return_arr['message'] = 'Account Found!';
	$sql = "SELECT * FROM chess_accounts WHERE username = 'Jayvan'";
	$result = $db->query($sql);
	echo "<table cellspacing='0' class='basic_table'>";
	if ($result->num_rows > 0) {
	   while($myrow = $result->fetch_assoc()) {
	      // data from the table is stored in an associative array
	      echo "<tr><td>" . $myrow['username'] . "</td><td>" . $myrow['password'] . "</td></tr>";
	   }
	   $return_arr['message'] = $myrow['username'];
	} else {
	   echo "<tr><td colspan='5'>Sorry, there are no records found.</td></tr>";
	}
	echo "</table>";
}
mysqli_close($db);
// return the JSON formatted data
echo json_encode($return_arr);
*/
?>