import { defineStore } from 'pinia';
import { userService } from '../services/login.service'
import router from '../router'

export const useAccountStore = defineStore('account', {
	state: () => ({
		username: localStorage.getItem('user'),
		token: localStorage.getItem('token'),
		permissions: JSON.parse(localStorage.getItem('permissions')),
		isAdmin: JSON.parse(localStorage.getItem('isAdmin') || false),
		groupName: localStorage.getItem('groupName')
	}),

	getters: {
		hasPermission: ({ permissions, isAdmin }) => (permission) => {
			if (JSON.parse(isAdmin)) return true
			if (permissions && permissions.find(perm => perm.action === permission)) return true
			return false
		}
	},

	actions: {
		login ({ email, password }) {
			userService.login(email, password)
				.then(
					user => {
						this.loginSuccess(user);
						router.push('/')
					},
					() => {
						this.loginFailure({ username: email });
					}
				)
		},
		logout () {
			userService.logout()
			this.clearUser();

			router.push('/login')
		},

		
		// MUTATIONS
		loginSuccess ({ token, username, permissions, isAdmin, groupName }) {
			this.token = token
			this.username = username
			this.permissions = permissions
			this.isAdmin = isAdmin || false
			this.groupName = groupName
		},
		loginFailure ({ username }) {
			this.token = null
			this.username = username
			this.permissions = null
			this.isAdmin = null
			this.groupName = null
		},
		clearUser () {
			this.$reset()
		},
	}
})