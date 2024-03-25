import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ITaskResponse } from '@/types/task.types'

import { TaskService } from '@/services/task.sercvice'

export function useTasks() {
	const { data } = useQuery({
		queryKey: ['get tasks'],
		queryFn: () => TaskService.getTasks(),
	})

	const [items, setItems] = useState<ITaskResponse[] | undefined>(
		data?.data || []
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
