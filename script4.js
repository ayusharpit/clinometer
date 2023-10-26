function calculate() {
    var theta = parseFloat(document.getElementById('theta').value);
    var alpha = parseFloat(document.getElementById('alpha').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var l = parseFloat(document.getElementById('l').value);

    var filledCount = 0;
    if (!isNaN(theta)) filledCount++;
    if (!isNaN(alpha)) filledCount++;
    if (!isNaN(x)) filledCount++;
    if (!isNaN(y)) filledCount++;
    if (!isNaN(y1)) filledCount++;
    if (!isNaN(l)) filledCount++;

    if (filledCount >= 3) {
        if (filledCount == 3) {
            // Calculate the missing fields based on the provided inputs
            if (isNaN(x)) x = y / Math.tan(degreesToRadians(theta));
            if (isNaN(y)) y = x * Math.tan(degreesToRadians(theta));
            if (isNaN(y1)) y1 = x * Math.tan(degreesToRadians(alpha));
            if (isNaN(l)) l = y + y1;
        } else if (filledCount == 4) {
            // Determine which field is missing and calculate it
            if (isNaN(theta)) theta = radiansToDegrees(Math.atan(y / x));
            else if (isNaN(alpha)) alpha = radiansToDegrees(Math.atan(y1 / x));
            else if (isNaN(x)) x = y / Math.tan(degreesToRadians(theta));
            else if (isNaN(y)) y = x * Math.tan(degreesToRadians(theta));
            else if (isNaN(y1)) y1 = x * Math.tan(degreesToRadians(alpha));
        } else if (filledCount == 5) {
            // Determine which field is missing and calculate it
            if (isNaN(x)) x = y / Math.tan(degreesToRadians(theta));
            else if (isNaN(y)) y = x * Math.tan(degreesToRadians(theta));
            else if (isNaN(y1)) y1 = x * Math.tan(degreesToRadians(alpha));
            else if (isNaN(l)) l = y + y1;
        }

        // Update the input fields with the calculated values
        document.getElementById('theta').value = theta.toFixed(2);
        document.getElementById('alpha').value = alpha.toFixed(2);
        document.getElementById('x').value = x.toFixed(2);
        document.getElementById('y').value = y.toFixed(2);
        document.getElementById('y1').value = y1.toFixed(2);
        document.getElementById('l').value = l.toFixed(2);
    } else {
        alert('Please enter at least 3 values to calculate the others.');
    }
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}
