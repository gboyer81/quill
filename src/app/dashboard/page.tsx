import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import MaxWidthWrapper from '../components/MaxWidthWrapper'

const Page = async () => {
	const { getUser } = await getKindeServerSession()
	const user = await getUser()

	if (!user || !user.id) redirect('/auth-callback?origin=/dashboard')

	return (
		<MaxWidthWrapper>
			<div className='flex justify-center align-middle mt-6 text-4xl font-extrabold'>
				{user.email}
			</div>
		</MaxWidthWrapper>
	)
}

export default Page
