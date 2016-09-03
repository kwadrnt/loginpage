
var loginObject = [
	{
	username: "kevin",
	password: "codify"
	},
	{
	username: "jose",
	password: "academy"
	},
	{
	username: "starbucks",
	password: "coffee"
	},
]

function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	for (var i = 0; i < loginObject.length; i++)

	if (username == loginObject[i].username && password == loginObject[i].password) {
		console.log("You're now logged in!")
	return
	}

console.log("sorry access denied")
}