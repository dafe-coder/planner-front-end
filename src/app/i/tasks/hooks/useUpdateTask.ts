import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

import { TaskService } from '@/services/task.service'

export function useUpdateTask(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ data, id }: { data: TypeTaskFormState; id: string }) =>
			TaskService.updateTask(id, data),
		onSuccess: () =>
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			}),
	})

	return { updateTask }
}
