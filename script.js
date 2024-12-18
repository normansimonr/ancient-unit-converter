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
  long_cubit: {
    category: "length",
    conversions: {
      kilometers: 7 * CUBIT_IN_KILOMETERS / 6, // A long cubit is seven handbreadths
      meters: 7 * CUBIT_IN_METERS / 6,
      centimeters: 7 * CUBIT_IN_CM / 6,
      inches: 7 * CUBIT_IN_INCHES / 6,
      yards: 7 * CUBIT_IN_YARDS / 6
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
  },
  cubit_gmd: {
    category: "length",
    conversions: {
      kilometers: CUBIT_IN_KILOMETERS,
      meters: CUBIT_IN_METERS,
      centimeters: CUBIT_IN_CM,
      inches: CUBIT_IN_INCHES,
      yards: CUBIT_IN_YARDS
    }
  },
  span: {
    category: "length",
    conversions: {
      kilometers: CUBIT_IN_KILOMETERS / 2, // 1 span = 1/2 cubit
      meters: CUBIT_IN_METERS / 2, 
      centimeters: CUBIT_IN_CM / 2,
      inches: CUBIT_IN_INCHES / 2,
      yards: CUBIT_IN_YARDS / 2
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
  reed: {
    category: "length",
    conversions: {
      kilometers: 7 * CUBIT_IN_KILOMETERS, // 1 reed = 6 long cubits = 7 cubits
      meters: 7 * CUBIT_IN_METERS, 
      centimeters: 7 * CUBIT_IN_CM,
      inches: 7 * CUBIT_IN_INCHES,
      yards: 7 * CUBIT_IN_YARDS
    }
  },
  shabbath_day: {
    category: "length",
    conversions: {
      kilometers: 200 * 7 * CUBIT_IN_KILOMETERS / 6, // 1 shabbath's day = 200 nt cubits = 200 Old Testament long cubits
      meters: 200 * 7 * CUBIT_IN_METERS / 6, 
      centimeters: 200 * 7 * CUBIT_IN_CM / 6,
      inches: 200 * 7 * CUBIT_IN_INCHES / 6,
      yards: 200 * 7 * CUBIT_IN_YARDS / 6
    }
  },
  fathom: {
    category: "length",
    conversions: {
      kilometers: 1.8/1000,
      meters: 1.8, 
      centimeters: 180,
      inches: 180/2.54,
      yards: 180/(2.54*36)
    }
  },
  nt_cubit: {
    category: "length",
    conversions: {
      kilometers: 7 * CUBIT_IN_KILOMETERS / 6, // An NT cubit is equivalent to an OT long cubit
      meters: 7 * CUBIT_IN_METERS / 6,
      centimeters: 7 * CUBIT_IN_CM / 6,
      inches: 7 * CUBIT_IN_INCHES / 6,
      yards: 7 * CUBIT_IN_YARDS / 6
    }
  },
  stade: {
    category: "length",
    conversions: {
      kilometers: 185/1000,
      meters: 185, 
      centimeters: 185*100,
      inches: 185*100/2.54,
      yards: 185*100/(2.54*36)
    }
  },
  roman_mile: {
    category: "length",
    conversions: {
      kilometers: 1497/1000,
      meters: 1497, 
      centimeters: 1497*100,
      inches: 1497*100/2.54,
      yards: 1497*100/(2.54*36)
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
