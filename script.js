// Define constants for reference units
const CUBIT_IN_CM = 45; // 1 cubit = 45 cm
const CUBIT_IN_KILOMETERS = CUBIT_IN_CM / 100000; // Convert to kilometers
const CUBIT_IN_METERS = CUBIT_IN_CM / 100; // Convert to meters
const CUBIT_IN_INCHES = CUBIT_IN_CM / 2.54; // Convert to inches
const CUBIT_IN_YARDS = CUBIT_IN_INCHES / 36; // Convert to yards

// Conversion equivalence table
const conversionTable = {
  cubit: {
    category: "length",
    conversions: {
      kilometers: CUBIT_IN_KILOMETERS,
      meters: CUBIT_IN_METERS,
      centimeters: CUBIT_IN_CM,
      inches: CUBIT_IN_INCHES,
      yards: CUBIT_IN_YARDS
    }
  },
  talent: {
    category: "weight",
    conversions: {
      kilograms: 34.3, // For simplicity, this could also be derived from a base weight unit if applicable
      grams: 34.3 * 1000,
      pounds: 34.3 * 2.20462
    }
  },
  handbreadth: {
    category: "length",
    conversions: {
      kilometers: CUBIT_IN_KILOMETERS / 6, // 1 handbreadth = 1/6 cubit
      meters: CUBIT_IN_METERS / 6, 
      centimeters: CUBIT_IN_CM / 6,
      inches: CUBIT_IN_INCHES / 6,
      yards: CUBIT_IN_YARDS / 6
    }
  },
  finger: {
    category: "length",
    conversions: {
      kilometers: CUBIT_IN_KILOMETERS / 24, // 1 finger = 1/24 cubit
      meters: CUBIT_IN_METERS / 24,
      centimeters: CUBIT_IN_CM / 24,
      inches: CUBIT_IN_INCHES / 24,
      yards: CUBIT_IN_YARDS / 24
    }
  }
  
};

function convert() {
  const inputValue = parseFloat(document.getElementById('input-value').value);
  const inputUnit = document.getElementById('input-unit').value;

  if (isNaN(inputValue)) {
    document.getElementById('result').innerHTML = '<p>Please enter a valid number.</p>';
    return;
  }

  const unitData = conversionTable[inputUnit];
  if (!unitData) {
    document.getElementById('result').innerHTML = '<p>Conversion not supported.</p>';
    return;
  }

  const results = [];
  for (const [modernUnit, conversionRate] of Object.entries(unitData.conversions)) {
    const convertedValue = inputValue * conversionRate;
    results.push(`${convertedValue.toFixed(2)} ${modernUnit}`);
  }

  document.getElementById('result').innerHTML = `
    <h3>Conversions for ${inputValue} ${inputUnit}(s):</h3>
    <ul>
      ${results.map(result => `<li>${result}</li>`).join('')}
    </ul>
  `;
}
