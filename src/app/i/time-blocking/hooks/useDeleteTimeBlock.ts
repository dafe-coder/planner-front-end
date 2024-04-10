import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TimeBlockService } from '@/services/time-block.service'

export function useDeleteTimeBlock(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteTimeBlock, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete time-block', itemId],
		mutationFn: () => TimeBlockService.deleteTimeBlock(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return { deleteTimeBlock, isDeletePending }
}
