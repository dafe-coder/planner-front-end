import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PomodoroService } from '@/services/pomodoro.services'

export function useCreateSession() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['create new session'],
		mutationFn: () => PomodoroService.createSession(),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get today session'],
			})
		},
	})

	return { mutate, isPending }
}
