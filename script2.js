function calculate() {
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var theta = parseFloat(document.getElementById('theta').value);

    if (!isNaN(x) && !isNaN(y) && isNaN(theta)) {
        // Calculate theta if x and y are known
        theta = Math.atan2(y, x) * (180 / Math.PI);
        document.getElementById('theta').value = theta.toFixed(2);
    } else if (!isNaN(x) && isNaN(y) && !isNaN(theta)) {
        // Calculate y if x and theta are known
        y = x * Math.tan(theta * (Math.PI / 180));
        document.getElementById('y').value = y.toFixed(2);
    } else if (isNaN(x) && !isNaN(y) && !isNaN(theta)) {
        // Calculate x if y and theta are known
        x = y / Math.tan(theta * (Math.PI / 180));
        document.getElementById('x').value = x.toFixed(2);
    } else {
        alert('Please enter any two values to calculate the third.');
    }
}
