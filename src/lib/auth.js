import router from '../router'

function setAuth (token, username, permissions, isAdmin, groupName) {
	localStorage.setItem('token', token)
	localStorage.setItem('user', username)
	localStorage.setItem('permissions', JSON.stringify(permissions))
	localStorage.setItem('isAdmin', isAdmin || false)
	localStorage.setItem('groupName', groupName)
}

function unsetAuth () {
	localStorage.clear()
	router.push('/login')
}

function getAuthHeader () {
	const token = localStorage.getItem('token')
	if (!token) return {}
	return {
		'Authorization': 'Bearer ' + token
	}
}

function getToken () {
	return localStorage.getItem('token')
}

export default {
	setAuth,
	unsetAuth,
	getAuthHeader,
	getToken
}