import axios from 'axios'
import globals from '../globals'
import queyrstring from 'querystring'
import auth from '../lib/auth'
import handleResponses from '../lib/handleResponses'

const TelessaudeApi = axios.create({ timeout: 3600000, baseURL: globals().publicUrl })

TelessaudeApi.interceptors.response.use((response) => response, (error) => {
	if (error.response.status === 403 && error.response.data === 'User has no permission') {
		auth.unsetAuth()
	}

	return Promise.reject(error)
});

function getTeleinterconsultaData(filter) {
	return TelessaudeApi
		.get(`teleinterconsulta/data?${queyrstring.stringify(filter)}`,
			{ headers: auth.getAuthHeader() }
		)
		.then(handleResponses.responseHandler)
		.catch(handleResponses.errorHandler)
}

function createJitsiMeet ({ startTime, totalTime }) {
	return TelessaudeApi
		.post(`teleinterconsulta/createMeet`,
            { startTime, totalTime },
			{ headers: auth.getAuthHeader() }
		)
		.then(handleResponses.responseHandler)
		.catch(handleResponses.errorHandler)
}

export const TeleinterconsultaService = {
    getTeleinterconsultaData,
    createJitsiMeet,
}