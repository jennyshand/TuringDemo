<?php
function do_demo()
{
     if( array_key_exists("string", $_POST))
        {
            
        
    $string = strip_tags($_POST["string"]);
    ?>

    <p id="input"><?= $string ?></p>

    <p id="output"><p id="original"></p></p>

    <p> <div id="language"> TM1 language: {w|w contains an
        equal number of 0s and 1s} <br /> </div>
        <div> <button id="demo">
            Demo TM1 </button> <br /> </div>
    </p>

    <p> <div id="language"> TM2 language: {w|w contains twice as many
            0s as 1s} <br /> </div>
        <div> <button id="demo2">
            Demo TM2 </button> <br /> </div>
    </p>

    <div> <button id="reset">
        Reset </button> <br /> </div>

    <p> <div> * "x" represents a marked 0, and "-" represents a marked 1. </div> </p>

    <form action="<?= htmlentities($_SERVER['PHP_SELF'], ENT_QUOTES) ?>" method="post">
         Are you done?
         <button name="finish" type="submit" value="done"> Done </button>
    </form>

     <?php
        }
        else{
            destroy_and_exit("Please enter a string!");
        }
}
?>
