function calculate() {
    var theta1 = parseFloat(document.getElementById('theta1').value);
    var theta2 = parseFloat(document.getElementById('theta2').value);
    var ca = parseFloat(document.getElementById('ca').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);

    var filledFields = 0;
    if (!isNaN(theta1)) filledFields++;
    if (!isNaN(theta2)) filledFields++;
    if (!isNaN(ca)) filledFields++;
    if (!isNaN(x)) filledFields++;
    if (!isNaN(y)) filledFields++;

    if (filledFields >= 2) {
        if (filledFields < 5) {
            if (isNaN(theta1)) {
                theta1 = Math.atan(y / x) * (180 / Math.PI);
            }
            if (isNaN(theta2)) {
                theta2 = Math.atan(y / (x + ca)) * (180 / Math.PI);
            }
            if (isNaN(ca)) {
                ca = y / (Math.tan(degreesToRadians(theta2)) - Math.tan(degreesToRadians(theta1)));
            }
            if (isNaN(x)) {
                x = (ca * Math.tan(degreesToRadians(theta2))) / (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2)));
            }
            if (isNaN(y)) {
                y = (ca * Math.tan(degreesToRadians(theta1)) * Math.tan(degreesToRadians(theta2))) / (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2)));
            }
        }
        document.getElementById('theta1').value = theta1.toFixed(2);
        document.getElementById('theta2').value = theta2.toFixed(2);
        document.getElementById('ca').value = ca.toFixed(2);
        document.getElementById('x').value = x.toFixed(2);
        document.getElementById('y').value = y.toFixed(2);
    } else {
        alert('Please enter at least 2 valid values among θ1, θ2, ca, x, and y.');
    }
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
