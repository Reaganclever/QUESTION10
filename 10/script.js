function findDay()
{
    let input = document.getElementById("dayNumber").value;

    let result = document.getElementById("result");

    // Validation
    if(input === "")
    {
        result.innerHTML = "Please enter a number!";
        result.style.color = "red";
        return false;
    }

    if(isNaN(input))
    {
        result.innerHTML = "Only numbers are allowed!";
        result.style.color = "red";
        return false;
    }

    input = Number(input);

    if(input < 1 || input > 7)
    {
        result.innerHTML = "Number must be between 1 and 7!";
        result.style.color = "red";
        return false;
    }

    // Switch Statement
    let day;

    switch(input)
    {
        case 1:
            day = "Sunday";
            break;

        case 2:
            day = "Monday";
            break;

        case 3:
            day = "Tuesday";
            break;

        case 4:
            day = "Wednesday";
            break;

        case 5:
            day = "Thursday";
            break;

        case 6:
            day = "Friday";
            break;

        case 7:
            day = "Saturday";
            break;

        default:
            day = "Invalid Input";
    }

    result.innerHTML = `
        Day Number: ${input} <br><br>
        Day Name: ${day}
    `;

    result.style.color = "green";

    return false;
}