// Define constants for reference units

const UNIT_RATIOS = {
  length: {
    kilometers: 0.001,
    meters: 1,
    centimeters: 100,
    inches: 39.3701,
    yards: 1.09361,
    feet: 3.28084,
    cuadras: 0.01
  },
  weight: { // Unit is grams
    kilograms: 1/1000,
    grams: 1,
    pounds: 0.00220462,
    "metric tonnes":9.999988107494002e-7
  },
  capacity: {
    litres: 1,
    millilitres: 1000,
    gallons: 0.264172,
    "kilograms of grain": 3/2,
    "grams of grain": 3000/2,
  }
};

// Function to generate conversions
function generateConversions(referenceValue, category) {
  const categoryRatios = UNIT_RATIOS[category];
  if (!categoryRatios) {
    throw new Error(`Unknown category: ${category}`);
  }

  const conversions = {};
  for (const [unit, ratio] of Object.entries(categoryRatios)) {
    conversions[unit] = referenceValue * ratio;
  }
  return conversions;
}


// Length always in metres
const CUBIT_IN_METRES = 0.45;
const FINGER_IN_METRES = CUBIT_IN_METRES/24;
const HANDBREADTH_IN_METRES = CUBIT_IN_METRES/6;
const SPAN_IN_METRES = CUBIT_IN_METRES/2;
const LONG_CUBIT_IN_METRES = 7 * HANDBREADTH_IN_METRES;
const REED_IN_METRES = 6 * LONG_CUBIT_IN_METRES;
const GMD_CUBIT_IN_METRES = CUBIT_IN_METRES;
const NT_CUBIT_IN_METRES = LONG_CUBIT_IN_METRES;
const FATHOM_IN_METRES = 1.8;
const STADE_IN_METRES = 185;
const SHABBATHS_DAY_WALK_IN_METRES = 200 * NT_CUBIT_IN_METRES;
const ROMAN_MILE_IN_METRES = 1497;

// Capacity always in litres
const PREEXILIC_EPHAH_IN_LITRES = 10;
const PREEXILIC_BATH_IN_LITRES = 22;
const POSTEXILIC_EPHAH_IN_LITRES = 39;
const LOG_IN_LITRES = PREEXILIC_BATH_IN_LITRES / 72;
const KAV_IN_LITRES = PREEXILIC_EPHAH_IN_LITRES / 18;
const OMER_IN_LITRES = PREEXILIC_EPHAH_IN_LITRES / 10;
const ISSARON_IN_LITRES = OMER_IN_LITRES;
const PREEXILIC_HIN_IN_LITRES = PREEXILIC_BATH_IN_LITRES / 6;
const POSTEXILIC_BATH_IN_LITRES = POSTEXILIC_EPHAH_IN_LITRES;
const POSTEXILIC_HIN_IN_LITRES = POSTEXILIC_BATH_IN_LITRES / 6;
const PREEXILIC_SEAH_IN_LITRES = PREEXILIC_EPHAH_IN_LITRES / 3;
const POSTEXILIC_SEAH_IN_LITRES = POSTEXILIC_EPHAH_IN_LITRES / 3;
const DOUBLE_BATH_IN_LITRES = 39;
const PREEXILIC_DRY_HOMER_IN_LITRES = 10 * PREEXILIC_EPHAH_IN_LITRES;
const PREEXILIC_LIQUID_HOMER_IN_LITRES = 10 * PREEXILIC_BATH_IN_LITRES;
const POSTEXILIC_HOMER_IN_LITRES = 10 * POSTEXILIC_EPHAH_IN_LITRES;
const PREEXILIC_DRY_KOR_IN_LITRES = PREEXILIC_DRY_HOMER_IN_LITRES;
const PREEXILIC_LIQUID_KOR_IN_LITRES = PREEXILIC_LIQUID_HOMER_IN_LITRES;
const POSTEXILIC_KOR_IN_LITRES = POSTEXILIC_HOMER_IN_LITRES;
const LETEK_IN_LITRES = PREEXILIC_DRY_HOMER_IN_LITRES / 2;
const NT_SEAH_IN_LITRES = POSTEXILIC_SEAH_IN_LITRES;
const NT_BATH_IN_LITRES = POSTEXILIC_BATH_IN_LITRES;
const NT_KOR_IN_LITRES = POSTEXILIC_KOR_IN_LITRES;
const CHOINIX_IN_LITRES = 1;
const METRITIS_IN_LITRES = NT_BATH_IN_LITRES;


// Weight always in grams
const SHEKEL_IN_GRAMS = 12;
const GERAH_IN_GRAMS = SHEKEL_IN_GRAMS / 20;
const BEKAH_IN_GRAMS = SHEKEL_IN_GRAMS / 2;
const MINA_IN_GRAMS = 60 * SHEKEL_IN_GRAMS;
const TALENT_IN_GRAMS = 3000 * SHEKEL_IN_GRAMS;
const PIM_IN_GRAMS = 2 * SHEKEL_IN_GRAMS / 3;
const LITRA_IN_GRAMS = 327;
const REVELATION_TALENT_IN_GRAMS = 40 * 1000;


// Conversion equivalence table
const conversionTable = {
  
  // Length
  
  cubit: {
    category: "length",
    conversions: generateConversions(CUBIT_IN_METRES, "length")
  },
  "long cubit": {
    category: "length",
    conversions: generateConversions(LONG_CUBIT_IN_METRES, "length")
  },
  finger: {
    category: "length",
    conversions: generateConversions(FINGER_IN_METRES, "length")
  },
  "GMD cubit": {
    category: "length",
    conversions: generateConversions(GMD_CUBIT_IN_METRES, "length")
  },
  span: {
    category: "length",
    conversions: generateConversions(SPAN_IN_METRES, "length")
  },
  handbreadth: {
    category: "length",
    conversions: generateConversions(HANDBREADTH_IN_METRES, "length")
  },
  reed: {
    category: "length",
    conversions: generateConversions(REED_IN_METRES, "length")
  },
  "Shabbath's day walk": {
    category: "length",
    conversions: generateConversions(SHABBATHS_DAY_WALK_IN_METRES, "length")
  },
  fathom: {
    category: "length",
    conversions: generateConversions(FATHOM_IN_METRES, "length")
  },
  "New Testament cubit": {
    category: "length",
    conversions: generateConversions(NT_CUBIT_IN_METRES, "length")
  },
  stade: {
    category: "length",
    conversions: generateConversions(STADE_IN_METRES, "length")
  },
  "Roman mile": {
    category: "length",
    conversions: generateConversions(ROMAN_MILE_IN_METRES, "length")
  },
  
  
  // Capacity
  
  
  "pre-exilic ephah": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_EPHAH_IN_LITRES, "capacity")
  },
  "pre-exilic bath": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_BATH_IN_LITRES, "capacity")
  },
  "post-exilic ephah": {
    category: "capacity",
    conversions: generateConversions(POSTEXILIC_EPHAH_IN_LITRES, "capacity")
  },
  "log": {
    category: "capacity",
    conversions: generateConversions(LOG_IN_LITRES, "capacity")
  },
  "kav": {
    category: "capacity",
    conversions: generateConversions(KAV_IN_LITRES, "capacity")
  },
  "omer": {
    category: "capacity",
    conversions: generateConversions(OMER_IN_LITRES, "capacity")
  },
  "issaron": {
    category: "capacity",
    conversions: generateConversions(ISSARON_IN_LITRES, "capacity")
  },
  "pre-exilic hin": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_HIN_IN_LITRES, "capacity")
  },
  "post-exilic bath": {
    category: "capacity",
    conversions: generateConversions(POSTEXILIC_BATH_IN_LITRES, "capacity")
  },
  "post-exilic hin": {
    category: "capacity",
    conversions: generateConversions(POSTEXILIC_HIN_IN_LITRES, "capacity")
  },
  "pre-exilic seah": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_SEAH_IN_LITRES, "capacity")
  },
  "post-exilic seah": {
    category: "capacity",
    conversions: generateConversions(POSTEXILIC_SEAH_IN_LITRES, "capacity")
  },
  "double bath": {
    category: "capacity",
    conversions: generateConversions(DOUBLE_BATH_IN_LITRES, "capacity")
  },
  "pre-exilic dry homer": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_DRY_HOMER_IN_LITRES, "capacity")
  },
  "pre-exilic liquid homer": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_LIQUID_HOMER_IN_LITRES, "capacity")
  },
  "post-exilic homer": {
    category: "capacity",
    conversions: generateConversions(POSTEXILIC_HOMER_IN_LITRES, "capacity")
  },
  "pre-exilic dry kor": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_DRY_KOR_IN_LITRES, "capacity")
  },
  "pre-exilic liquid kor": {
    category: "capacity",
    conversions: generateConversions(PREEXILIC_LIQUID_KOR_IN_LITRES, "capacity")
  },
  "post-exilic kor": {
    category: "capacity",
    conversions: generateConversions(POSTEXILIC_KOR_IN_LITRES, "capacity")
  },
  "letek": {
    category: "capacity",
    conversions: generateConversions(LETEK_IN_LITRES, "capacity")
  },
  
  
  "New Testament seah": {
    category: "capacity",
    conversions: generateConversions(NT_SEAH_IN_LITRES, "capacity")
  },
  "New Testament bath": {
    category: "capacity",
    conversions: generateConversions(NT_BATH_IN_LITRES, "capacity")
  },
  "New Testament kor": {
    category: "capacity",
    conversions: generateConversions(NT_KOR_IN_LITRES, "capacity")
  },
  "choinix": {
    category: "capacity",
    conversions: generateConversions(CHOINIX_IN_LITRES, "capacity")
  },
  "metritis": {
    category: "capacity",
    conversions: generateConversions(METRITIS_IN_LITRES, "capacity")
  },
  
 
  // Weight

  "shekel": {
    category: "weight",
    conversions: generateConversions(SHEKEL_IN_GRAMS, "weight")
  },
  "beka": {
    category: "weight",
    conversions: generateConversions(BEKAH_IN_GRAMS, "weight")
  },
  "mina": {
    category: "weight",
    conversions: generateConversions(MINA_IN_GRAMS, "weight")
  },
  "talent": {
    category: "weight",
    conversions: generateConversions(TALENT_IN_GRAMS, "weight")
  },
  "pim": {
    category: "weight",
    conversions: generateConversions(PIM_IN_GRAMS, "weight")
  },
  
  
  "litra": {
    category: "weight",
    conversions: generateConversions(LITRA_IN_GRAMS, "weight")
  },
  "Revelation's talent": {
    category: "weight",
    conversions: generateConversions(REVELATION_TALENT_IN_GRAMS, "weight")
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
