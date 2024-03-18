import {
	IPomodoroRoundResponse,
	IPomodoroSessionResponse,
	TypePomodoroSessionState,
} from '@/types/pomodoro.types'

import { axiosWithAuth } from '@/api/interceptors'

const BASE_URL = '/user/timer'

export const PomodoroServices = {
	async getTodaySession() {
		const response = await axiosWithAuth.get<IPomodoroSessionResponse>(
			`${BASE_URL}/today`
		)
		return response
	},

	async createSession() {
		const response =
			await axiosWithAuth.post<IPomodoroSessionResponse>(BASE_URL)
		return response
	},

	async updateSession(id: string, data: TypePomodoroSessionState) {
		const response = await axiosWithAuth.put<IPomodoroSessionResponse>(
			`${BASE_URL}/${id}`,
			data
		)
		return response
	},

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`)
		return response
	},

	async updateRoundSession(id: string, data: IPomodoroRoundResponse) {
		const response = await axiosWithAuth.put(`${BASE_URL}/round/${id}`, data)
		return response
	},
}
