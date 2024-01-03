<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Chess</title>
  <link rel="icon" type="image/x-icon" href="img/favicon.png">
  <link href="chessStyle.css" rel="stylesheet" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <style>
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
  <form id='signUpForm'>
    Username: <input name='username' value=''><br><br>
    Password: <input name='password' type='password' value=''><br><br>
    Profile Image: <input name='profileimage' value=''><br><br>
    Country: <input name='country' value=''><br><br>
    Age: <input name='age' value='' type="number"><br><br>
    <input id='submit' type="submit" name="submit">
  </form>
  <div id='output' style='width: 100%; text-align: center;'></div>
  <script type = "text/javascript" language = "javascript">
     $(document).ready(function() {
        $(document).on("submit","#signUpForm", function(e) {
          e.preventDefault();

          // show processing message
          $("#output").html("Creating Account...");
          $.post("createAccount.php", $("#signUpForm").serialize(), function(data){
            setTimeout(function() {
              if (data.error == "false") {
                $("#output").html("<p>" + data.message + "</p>");
              } else {
                $("#output").html("<p class='error'>" + data.message + "</p>");
              }
              setTimeout(function() {
                window.location = 'chess.html';
              })
            }, 2000); 
          }, "json");
        });
     });
  </script>
</body>
</html>