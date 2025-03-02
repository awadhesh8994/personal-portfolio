let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

document.addEventListener("DOMContentLoaded", function () {
  fetch('https://api.countapi.xyz/hit/awadhesh-online.vercel.app/visits')
    .then(response => response.json())
    .then(data => {
      document.getElementById('visitor-count').innerText = data.value;
    })
    .catch(error => console.error('Error fetching visitor count:', error));
});
