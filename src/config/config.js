const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:3000'
		: 'https://gudeeds-database.herokuapp.com'

export default apiUrl
