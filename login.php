<?
// start the session and register the session variables
session_start();

// get the command value (use request since both post and get are used
$cmd = $_REQUEST['cmd'];
$username = $_POST['user'];
$password = $_POST['pass'];

if ($cmd == "login") {   
  $_SESSION['valid_session'] = "false";   
  $message = "<span style='color: #ff0000;'>The username and/or password are incorrect!</span>";

  $password = md5($password);  // hash the password to check with database value
   
     // Connect to the database and select table
  include("connectToDB.inc.php");

  $sql = "SELECT * FROM chess_accounts WHERE username='" . $username . "'";
  $result = $db->query($sql);
  
  if ($result->num_rows > 0) {
    while($myrow = $result->fetch_assoc()) {      
      if  ($username == $myrow['username'] && $password == $myrow['password'])  {
        $_SESSION['valid_session'] = "true";
        // autentication verified, simply load the page
        $landing_page = "chess.html"; // your page to go to when logging in
        echo "<script language='JavaScript'> window.location='" . $landing_page . "'; </script>";     
      }
    }
  } else {
    $message = "<span style='color: #ff0000;'>Sorry, no user found.</span>";
  }  
  
  mysqli_close($db);  // close db connection
}


// force the destruction of the session if you logout.
if ($cmd == "logout")  {
   session_start();
   session_destroy(); 
   $message = "<span style='color: green;'>You have logged out.</span>";
}

// error messages
if ($cmd == "unauth") {
  // default unauth message
  $message = "<span style='color: #ff0000;'>Sorry, you do not have permission to access this page.</span>";
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Chess - Login</title>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <meta http-equiv="CACHE-CONTROL" content="no-store, no-cache, must-revalidate, post-check=0, pre-check=0">
  <link rel="icon" type="image/x-icon" href="img/favicon.png">
  <link href="chessStyle.css" rel="stylesheet" type="text/css" />
  <style type="text/css">
    html {
      width: 100%;
      height: 100%;
      background: url('https://cdn1.dotesports.com/wp-content/uploads/2022/03/22043303/123.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
    input {
      float: right;
      width: 300px;
      height: 25px;
      border: 1px solid black;
      background: green;
    }
    form {
      position: relative;
      background: lightgreen;
      padding: 20px;
      border: 2px solid black;
      border-radius: 10px;
      margin: auto;
      text-align: left;
      width: 25%;
      height: 25%;
    }
    #submit {
      color: white;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;
      position: absolute;
      width: 75px;
      right: 10px;
      bottom:  10px;
    }
  </style>
</head>

<body>

<?
// display the message
if ($message) {
  echo "<p>" . $message . "</p>";
}

// print login page if logout, login, or an error occurs
echo "
  <form action='login.php' method='POST' style='height: 25%;'>
  <input type='hidden' name='cmd' value='login'></input>
  Username: <input type='text' name='user' value='" . $_POST['user'] . "' maxlength='20' required></input><br />
  Password: <input type='password' name='pass' maxlength='15' required></input>
  <input type='submit' value='LOGIN' id='submit'></input>
</form>
";
?>
</body>
</html>