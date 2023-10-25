const distanceInput = document.getElementById('distance');
const heightInput = document.getElementById('height');
const angleInput = document.getElementById('angle');
const resultDiv = document.getElementById('result');

function calculateMissingValue() {
    const x = parseFloat(distanceInput.value);
    const y = parseFloat(heightInput.value);
    const angle = parseFloat(angleInput.value);

    if (!isNaN(x) && !isNaN(angle)) {
        // Calculate height (y) if x and angle are provided
        const radians = angle * (Math.PI / 180);
        const calculatedHeight = Math.tan(radians) * x;
        heightInput.value = calculatedHeight.toFixed(2);
        resultDiv.textContent = `Calculated Height: ${calculatedHeight.toFixed(2)} m`;
    } else if (!isNaN(y) && !isNaN(angle)) {
        // Calculate distance (x) if y and angle are provided
        const radians = angle * (Math.PI / 180);
        const calculatedDistance = y / Math.tan(radians);
        distanceInput.value = calculatedDistance.toFixed(2);
        resultDiv.textContent = `Calculated Distance: ${calculatedDistance.toFixed(2)}`;
    } else if (!isNaN(x) && !isNaN(y)) {
        // Calculate angle if x and y are provided
        const calculatedAngle = Math.atan(y / x) * (180 / Math.PI);
        angleInput.value = calculatedAngle.toFixed(2);
        resultDiv.textContent = `Calculated Angle: ${calculatedAngle.toFixed(2)}°`;
    } else {
        resultDiv.textContent = '';
    }
}

distanceInput.addEventListener('input', calculateMissingValue);
heightInput.addEventListener('input', calculateMissingValue);
angleInput.addEventListener('input', calculateMissingValue);
