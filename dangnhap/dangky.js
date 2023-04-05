function signup(e)
{
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("fullname").value;
    var user
    {
        fullname : fullname,
        email : email,
        password : password,
    }
    var json = json.stringify(value: user);
    localStorage.setItem(key: fullname, json);
    alert("dang ky thanh cong")

}