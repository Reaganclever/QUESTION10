<?php
$xml = simplexml_load_file("days.xml");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day Finder System</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">

        <h1>Day Of The Week Identifier</h1>

        <p class="subtitle">
            Enter a number between 1 and 7 to identify the day of the week.
        </p>

        <form onsubmit="return findDay()">

            <input 
                type="text"
                id="dayNumber"
                placeholder="Enter Number (1-7)"
            >

            <button type="submit">
                Find Day
            </button>

        </form>

        <div id="result">

            Waiting for input...

        </div>

    </div>

    <script src="script.js"></script>

</body>
</html>