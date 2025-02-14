var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'OHFYeXgzWmptSlF5WkJBaEh5VXNoRDh6SndxVWE2dGFqYThmT09Odg=='
}

var countrySelect = document.querySelector('.country'),
    countryState = document.querySelector('.state'),
    countryCity = document.querySelector('.city')

function loadCountries() {
    let apiEndPoint = config.cUrl
    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
}

window.onload = loadCountries