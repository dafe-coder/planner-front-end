import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import type { ITimeBlockResponse } from '@/types/type-block.types'

import { TimeBlockService } from '@/services/time-block.service'

export const useTimeBlocks = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['time-blocks'],
		queryFn: () => TimeBlockService.getTimeBlocks(),
	})

	const [items, setItems] = useState<ITimeBlockResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}
