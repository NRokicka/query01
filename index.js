var $google = document.getElementById('google');

$google.addEventListener('click', function(e) {
    alert ('Now we wont navigate to Google');
    e.preventDefault();
})