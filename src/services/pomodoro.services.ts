import {
	IPomodoroRoundResponse,
	IPomodoroSessionResponse,
	TypePomodoroRoundState,
} from '@/types/pomodoro.types'

import { axiosWithAuth } from '@/api/interceptors'

const BASE_URL = '/user/timer'

export const PomodoroService = {
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

	async updateSession(id: string, data: TypePomodoroRoundState) {
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

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosWithAuth.put(`${BASE_URL}/round/${id}`, data)
		return response
	},
}
