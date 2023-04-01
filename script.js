fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = data.ip;
        document.getElementById('hostname').textContent = data.hostname;
    })
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('country').textContent = data.country_name;
        document.getElementById('provider').textContent = data.org;
    })
    .catch(error => console.error(error));
