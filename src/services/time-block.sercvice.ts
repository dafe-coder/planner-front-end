import {
	ITimeBlockResponse,
	TypeTimeBlockFormState,
} from '@/types/type-block.types'

import { axiosWithAuth } from '@/api/interceptors'

const BASE_URL = '/user/time-blocks'

export const TimeBlockService = {
	async getTimeBlocks() {
		const response = await axiosWithAuth.get<ITimeBlockResponse>(BASE_URL)
		return response
	},

	async createTimeBlock() {
		const response = await axiosWithAuth.post<ITimeBlockResponse>(BASE_URL)
		return response
	},

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosWithAuth.put<ITimeBlockResponse>(
			`${BASE_URL}/update-order`,
			{ ids }
		)
		return response
	},

	async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.put<ITimeBlockResponse>(
			`${BASE_URL}/${id}`,
			data
		)
		return response
	},

	async deleteTimeBlock(id: string) {
		const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`)
		return response
	},
}
