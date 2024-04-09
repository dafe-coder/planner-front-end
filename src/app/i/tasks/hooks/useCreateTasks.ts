import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

import { TaskService } from '@/services/task.sercvice'

export function useCreateTask(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: createTask } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: TypeTaskFormState) => TaskService.createTask(data),
		onSuccess: () =>
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			}),
	})

	return { createTask }
}
