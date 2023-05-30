function celToFah() {
    var cel = Number(document.getElementById("in").value);
    var fah = (cel * 1.8) + 32
    document.getElementById("result").innerHTML = "Result: " + fah + "&#176F";
}
function fahToCel() {
    var fah = Number(document.getElementById("in").value);
    var cel = (fah - 32) * 0.5555
    var cel = cel.toFixed(1)
    document.getElementById("result").innerHTML = "Result: " + cel + "&#176C";
}
function getSelectedValue() {
    var selectedValue = document.getElementById("list").value;
    return selectedValue;
}
function setResult() {
    if (getSelectedValue() === "celsius") {
        celToFah();
    } else {
        fahToCel();
    }
}