import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypePomodoroRoundState } from '@/types/pomodoro.types'

import { PomodoroService } from '@/services/pomodoro.services'

export function useUpdateRound() {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['update round'],
		mutationFn: ({ id, data }: { id: string; data: TypePomodoroRoundState }) =>
			PomodoroService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		},
	})

	return { updateRound, isUpdateRoundPending }
}
