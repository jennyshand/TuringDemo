<?php
    session_start();
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<!--
   Jenny Shand
   4/13/18
   URL: http://nrs-projects.humboldt.edu/~jes1098/cs461/TuringDemo.php
-->

<head>
    <title> Turing Demo </title>
    <meta charset="utf-8" />

    <?php
        require_once("create_form.php");
        require_once("do_demo.php");
        require_once("destroy_and_exit.php");
    ?>

    <link href="http://users.humboldt.edu/smtuttle/styles/normalize.css"
          type="text/css" rel="stylesheet" />

    <link href="demo.css"
          type="text/css" rel="stylesheet" />

    <script src="doDemo.js" type="text/javascript" async="async">
    </script>

</head>

<body>
    <h1> Turing Demo </h1>

    <img src="turingMachine.gif" alt="Turing Machine Depiction" style="border:5px solid DarkGrey" class="center" height="275" width="350">

    <h4> See if a Turing machine that decides a selected language accepts a given string: </h4>

<?php
if (! array_key_exists('next-stage', $_SESSION))
{
    create_form();
    $_SESSION['next-stage'] = "dodemo";
}
elseif ($_SESSION['next-stage'] == "dodemo")
{
    do_demo();
    $_SESSION['next-stage'] = "is_user_done";
}  
elseif ($_SESSION['next-stage'] == "is_user_done")
{
    session_destroy();
    session_regenerate_id(TRUE);
    session_start();

    create_form();
    $_SESSION['next-stage'] = "dodemo";
}

else
{
    ?>
    <p> <strong> YIKES! should NOT have been able to reach
        here! </strong> </p>
    <?php

    session_destroy();
    session_regenerate_id(TRUE);
    session_start();

    create_form();
    $_SESSION['next-stage'] = "dodemo";
}
?>

<h2> Jenny Shand </h2>

<h3> CS 461 </h3>

</body>
</html>

