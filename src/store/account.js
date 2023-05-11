import { userService } from '../services'
import router from '../router'

const state = {
	username: localStorage.getItem('user'),
	token: localStorage.getItem('token'),
	permissions: JSON.parse(localStorage.getItem('permissions')),
	isAdmin: JSON.parse(localStorage.getItem('isAdmin') || false),
	groupName: localStorage.getItem('groupName')
}

const actions = {
	login ({ dispatch, commit }, { email, password }) {
		userService.login(email, password)
			.then(
				user => {
					commit('loginSuccess', user)
					router.push('/')
					dispatch('alert/success', 'Login feito com sucesso!', { root: true })
				},
				() => {
					commit('loginFailure', { username: email })
					dispatch('alert/error', 'Login inválido!', { root: true })
				}
			)
	},
	logout ({ dispatch, commit }) {
		userService.logout()
		commit('logout')
		router.push('/login')
		dispatch('alert/success', 'Deslogado com sucesso!', { root: true })
	}
}

const mutations = {
	loginSuccess (state, { token, username, permissions, isAdmin, groupName }) {
		state.token = token
		state.username = username
		state.permissions = permissions
		state.isAdmin = isAdmin || false
		state.groupName = groupName
	},
	loginFailure (state, { username }) {
		state.token = null
		state.username = username
		state.permissions = null
		state.isAdmin = null
		state.groupName = null
	},
	logout (state) {
		state.token = null
		state.username = null
		state.permissions = null
		state.isAdmin = null
		state.groupName = null
	}
}

const getters = {
	hasPermission: ({ permissions, isAdmin }) => (permission) => {
		if (JSON.parse(isAdmin)) return true
		if (permissions && permissions.find(perm => perm.action === permission)) return true
		return false
	}
}

export const account = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}