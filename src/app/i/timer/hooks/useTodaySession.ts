import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import type { ITimerState } from '../timer-types'

import { useLoadSettings } from './useLoadSettings'
import { PomodoroService } from '@/services/pomodoro.services'

export function useTodaySession({
	setActiveRound,
	setSecondsLeft,
}: ITimerState) {
	const { workInterval } = useLoadSettings()

	const {
		data: sessionsResponse,
		isLoading,
		refetch,
		isSuccess,
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => PomodoroService.getTodaySession(),
	})

	const rounds = sessionsResponse?.data.rounds

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			setActiveRound(activeRound)

			if (activeRound && activeRound?.totalSeconds !== 0) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds])

	return { sessionsResponse, isLoading, workInterval }
}
