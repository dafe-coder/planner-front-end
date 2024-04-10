import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TaskService } from '@/services/task.service'

export function useDeleteTask() {
	const queryClient = useQueryClient()

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete task'],
		mutationFn: (id: string) => TaskService.deleteTask(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			})
		},
	})

	return { deleteTask, isDeletePending }
}
