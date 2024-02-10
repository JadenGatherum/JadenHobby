$("#btnCalc").click(function () {
    var hoursTutored = parseFloat($("#hoursTutored").val());
    var charge = 0;
    var outputBox = $("#readonlyInput");

    if (hoursTutored <= 0 || isNaN(hoursTutored)) {
        // Makes sure the number is positive and not NaN
        alert("That is not a valid number, please enter a positive number");
        $("#hoursTutored").focus();
    } else {
        // calculate the total
        charge = (($("#hourlyCharge").val()) * hoursTutored);
        outputBox.val(charge);
    }
});