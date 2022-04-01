document.getElementById('submit-btn').addEventListener('click', function () {
    const mailFiled = document.getElementById('user-email');
    const userMail = mailFiled.value;

    const passField = document.getElementById('user-password');
    const userPassword = passField.value;

    if (userMail == 'mdsabbirkhan@gmail.com' && userPassword == 'khan') {
        window.location.href = 'banking-site.html'
    }
})