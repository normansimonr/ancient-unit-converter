// Conversion equivalence table
const conversionTable = {
  kilograms: { talent: 0.0291 },
  meters: { cubit: 2.22 },
  talent: { kilograms: 34.3 },
  cubit: { meters: 0.45 }
};

function convert() {
  const inputValue = parseFloat(document.getElementById('input-value').value);
  const inputUnit = document.getElementById('input-unit').value;
  const outputUnit = document.getElementById('output-unit').value;

  if (isNaN(inputValue)) {
    document.getElementById('result').innerText = 'Please enter a valid number.';
    return;
  }

  const conversionRate = conversionTable[inputUnit]?.[outputUnit];
  if (!conversionRate) {
    document.getElementById('result').innerText = 'Conversion not supported.';
    return;
  }

  const result = inputValue * conversionRate;
  document.getElementById('result').innerText = `Converted value: ${result.toFixed(2)} ${outputUnit}`;
}
 
