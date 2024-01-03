<?
//  create associative array that will be JSON encoded as the callback
$return_arr = array();

// initiate the error to false
$return_arr['error'] = "false";

// store the variables
$username = $_POST['username'];
$password = $_POST['password'];
$profileimage = $_POST['profileimage'];
$country = $_POST['country'];
$age = $_POST['age'];

$thePassword = md5($password);

include("connectToDB.inc.php");
if ($username == "" OR $password == "" OR $profileimage == "" OR $country == "" OR $age == "") {
	$return_arr['error'] = "true";
	$return_arr['message'] = "Error. Please fill in all fields.";
} else {
	$return_arr['message'] = 'Account Created!';
	$sql_insert = "INSERT INTO chess_accounts (username, password, profileimage, country, age) VALUES ('$username','$thePassword','$profileimage','$country','$age')";
    $result_insert = $db->query($sql_insert);
}
mysqli_close($db);
// return the JSON formatted data
echo json_encode($return_arr);
?>

