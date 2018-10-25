<?php
    function create_form()
    {
        ?>
        <form method="post"
              action="<?= htmlentities($_SERVER['PHP_SELF'], ENT_QUOTES) ?>">
        <fieldset>
            <legend> Please enter a string of 1s and/or 0s: </legend>

            <label for="string"> String: </label>
            <input type="text" name="string" id="string" required="required" />

            <div class="submit">
                <input type="submit" value="Submit String" />
            </div>
        </fieldset>
        </form>
        <?php
    }
?>
