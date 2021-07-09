const api                   = "https://coronavirus-19-api.herokuapp.com/countries";
const errors                = document.querySelector(".errors");
const loading               = document.querySelector(".loading");
const cases                 = document.querySelector(".cases");
const recovered             = document.querySelector(".recovered");
const deaths                = document.querySelector(".deaths");
const tests                 = document.querySelector(".tests");
const todayCases            = document.querySelector(".todayCases");
const todayDeaths           = document.querySelector(".todayDeaths");
const results               = document.querySelector(".result-container");
      results.style.display = "none";
      loading.style.display = "none";
      errors.textContent    = "";
//  Here to seperate
const form = document.querySelector(".form-data");
// Gets the country name
const country = document.querySelector(".country-name");

// Here to seperate
const searchForCountry = async countryName => {
  loading.style.display = "block";
  errors.textContent    = "";
  try {
    const response = await axios.get(`${api}/${countryName}`);
    if(response.data ==="Country not found"){ throw error;  }
    loading.style.display   = "none";
    todayCases.textContent  = response.data.todayCases;
    todayDeaths.textContent = response.data.todayDeaths;
    cases.textContent       = response.data.cases;
    recovered.textContent   = response.data.recovered;
    deaths.textContent      = response.data.deaths;
    tests.textContent       = response.data.totalTests;
    results.style.display   = "block";
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent    = "Unable to find the country, if you believe this is a bug, please make an issue on Github.";
  }
};


const handleSubmit = async e => {
  e.preventDefault();
  searchForCountry(country.value);
  console.log(country.value);
};

form.addEventListener("submit", e => handleSubmit(e));
