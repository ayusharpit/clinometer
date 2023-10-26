function calculate() {
    var theta1 = parseFloat(document.getElementById('theta1').value);
    var theta2 = parseFloat(document.getElementById('theta2').value);
    var ca = parseFloat(document.getElementById('ca').value);

    if (!isNaN(theta1) && !isNaN(theta2) && !isNaN(ca)) {
        // Calculate x and y if θ1, θ2, and ca are known
        var x = (ca * Math.tan(degreesToRadians(theta2))) / (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2)));
        var y = (ca * Math.tan(degreesToRadians(theta1)) * Math.tan(degreesToRadians(theta2))) / (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2)));
        
        document.getElementById('x').value = x.toFixed(2);
        document.getElementById('y').value = y.toFixed(2);
    } else if (!isNaN(theta1) && !isNaN(theta2) && !isNaN(y)) {
        // Calculate ca and x if θ1, θ2, and y are known
        var ca = y / (Math.tan(degreesToRadians(theta1)) * Math.tan(degreesToRadians(theta2)));
        var x = (ca * Math.tan(degreesToRadians(theta2))) / (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2)));

        document.getElementById('ca').value = ca.toFixed(2);
        document.getElementById('x').value = x.toFixed(2);
    } else if (!isNaN(theta1) && !isNaN(theta2) && !isNaN(x)) {
        // Calculate ca and y if θ1, θ2, and x are known
        var ca = x * (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2))) / Math.tan(degreesToRadians(theta2));
        var y = ca * Math.tan(degreesToRadians(theta1)) * Math.tan(degreesToRadians(theta2)) / (Math.tan(degreesToRadians(theta1)) - Math.tan(degreesToRadians(theta2)));

        document.getElementById('ca').value = ca.toFixed(2);
        document.getElementById('y').value = y.toFixed(2);
    } else {
        alert('Please enter any three values to calculate the other two.');
    }
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
