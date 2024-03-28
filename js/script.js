document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let interest = document.getElementById('interest').value;
    
    if (name === '' || email === '' || interest === '') {
        alert('Please fill out all fields');
    } else {
        alert('Form submitted successfully');
        document.getElementById('leadForm').reset();
    }
});