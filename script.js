function volume_sphere() {
  // Get input value from the field
  const radiusInput = document.getElementById('radius').value;

  // Convert to float
  const radius = parseFloat(radiusInput);

  // Get output field
  const volumeField = document.getElementById('volume');

  // Validate input
  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return;
  }

  // Calculate volume
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Set volume rounded to 4 decimal places
  volumeField.value = volume.toFixed(4);
}
