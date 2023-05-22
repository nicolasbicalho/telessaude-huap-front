import globals from '../globals'

import auth from '../lib/auth'
// import handleResponses from '../lib/handleResponses'

function login (username, password) {
	const requestOptions = {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	}
	// return fetch(`${globals().publicUrl}/intra/user/login`, requestOptions)
	// 	// .then(handleResponses.handleLoginResponse)
	// 	.then(({ token, permissions, isAdmin, groupName }) => {
	// 		const user = { token, username, permissions, isAdmin, groupName }
	// 		auth.setAuth(token, username, permissions, isAdmin, groupName)
	// 		return user
	// 	})

    const token = 'token';
    const responseUsername = 'Nicolas Bicalho';
    const permissions = '*';
    const isAdmin = true;
    const groupName = 'doctor';
    auth.setAuth(token, responseUsername, permissions, isAdmin, groupName)

    return { token, responseUsername, permissions, isAdmin, groupName }
}

function logout () {
	auth.unsetAuth()
}

function fetchUsers (filter, token) {
	return fetch(`${globals().publicUrl}/user?filter=${JSON.stringify(filter)}`, {
		method: 'get',
		headers: {
			'x-access-token': token
		}
	})
		.then(res => res.text())
		.then(str => JSON.parse(str))
}

export const userService = {
	login,
	logout,
	fetchUsers
}