import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NewTweet from 'components/NewTweet'
import Tweets from 'components/Tweets'
import prisma from 'lib/prisma'
import { getTweets } from 'lib/data.js'
import LoadMore from 'components/LoadMore'

export default function Home({ initialTweets }) {
  const [tweets, setTweets] = useState(initialTweets)
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (loading) {
      console.log('Still loading home')
    return null
  }

  if (!session) {
    router.push('/')
  }

  if (session && !session.user.name) {
    router.push('/setup')
  }

  return (
    <>
      <NewTweet tweets ={tweets} setTweets={setTweets} />
      <Tweets tweets={tweets} />    
      <LoadMore tweets={tweets} setTweets={setTweets} />
    </>
  )
}

export async function getServerSideProps() {
	let tweets = await getTweets(prisma, 2)
    tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      initialTweets: tweets,
    },
  }
}