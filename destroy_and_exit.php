<?php

/*=====
    function: destroy_and_exit: string -> void
    purpose: expects a specified complaint, and returns nothing, but has
        pretty Draconian side-effects:
        *   puts the specified complaint in a paragraph
            to the resulting document, followed by a link allowing
            one to try again (leading to the calling document)
        *   destroys the current session,
        *   completes the resulting document,
        *   and exits the current PHP document

    requires: 328footer.html
=====*/

function destroy_and_exit($complaint)
{
    ?>
    <p> <div> CANNOT CONTINUE: <?= $complaint ?> </div>
    </p>
    <p> <div> <a href="<?= htmlentities($_SERVER['PHP_SELF'], ENT_QUOTES) ?>">
        Try again </a> </div> </p>
    <?php
    session_destroy();
    exit;
}
?>
