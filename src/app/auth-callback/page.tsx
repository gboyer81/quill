/* 
	Auth callback to check:
		A. if user exists make sure they're synced to the DB
		B. if user doesn't exist, add them to the database
*/

import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'

const Page = () => {
	const router = useRouter()

	const searchParams = useSearchParams()

	// saves the value of the origin query param in dashboard
	const origin = searchParams.get('origin')

	const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
		onSuccess: ({ success }) => {
			if (success) {
				// user is synced to db
				router.push(origin ? `/${origin}` : '/dashboard')
			}
		},
	})
}

export default Page
