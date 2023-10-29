function calculateFields() {
    // Retrieve input values
    var theta1 = parseFloat(document.getElementById("theta1").value);
    var theta2 = parseFloat(document.getElementById("theta2").value);
    var alpha1 = parseFloat(document.getElementById("alpha1").value);
    var alpha2 = parseFloat(document.getElementById("alpha2").value);
    var ca = parseFloat(document.getElementById("ca").value);
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var l = parseFloat(document.getElementById("l").value);

    // Define formulas for each field
    var formulas = {
        'theta1': 'Math.atan(y / x) * (180 / Math.PI)',
        'theta2': 'Math.atan((y / x) + (ca / x)) * (180 / Math.PI)',
        'alpha1': 'Math.atan(y1 / x) * (180 / Math.PI)',
        'alpha2': 'Math.atan((y1 / x) + (ca / x)) * (180 / Math.PI)',
        'ca': 'y / (Math.tan(degToRad(theta1)) - Math.tan(degToRad(theta2)))',
        'x': 'y / Math.tan(degToRad(theta1))',
        'y': 'ca * Math.tan(degToRad(theta1)) * Math.tan(degToRad(theta2)) / (Math.tan(degToRad(theta2)) - Math.tan(degToRad(theta1)))',
        'y1': 'ca * Math.tan(degToRad(alpha1)) * Math.tan(degToRad(alpha2)) / (Math.tan(degToRad(alpha2)) - Math.tan(degToRad(alpha1)))',
        'l': 'y + y1'
    };

    // Calculate missing fields
    for (var field in formulas) {
        if (isNaN(eval(field)) && !isNaN(eval(formulas[field]))) {
            eval(field + ' = ' + formulas[field]);
        }
    }

    // Update the input fields with the calculated values
    document.getElementById("theta1").value = theta1;
    document.getElementById("theta2").value = theta2;
    document.getElementById("alpha1").value = alpha1;
    document.getElementById("alpha2").value = alpha2;
    document.getElementById("ca").value = ca;
    document.getElementById("x").value = x;
    document.getElementById("y").value = y;
    document.getElementById("y1").value = y1;
    document.getElementById("l").value = l;
}

// Helper function to convert degrees to radians
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
