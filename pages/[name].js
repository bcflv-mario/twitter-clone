import prisma from 'lib/prisma'
import { getUserTweets } from 'lib/data.js'
import { userExists } from 'lib/data.js'

import Tweets from 'components/Tweets'

export default function UserProfile({ userValid, name, tweets }) {

    if (!userValid) {
        return (
            <>
            <p className='text-center p-5'>User {name} not found</p>
            </>
        )
    }

    return (
        <>
        <p className='text-center p-5'>User profile of {name}</p>
        <Tweets tweets={tweets} />
        </>
    )
}

export async function getServerSideProps({ params }) {
  let userNameFound = await userExists( params.name, prisma )

    // if (userNameFound.length === 0) {
    if (!userNameFound) {

        return {
            props: {
                userVaild: false,
                name: params.name,
                tweets: null,
              },
            }
    }

  let tweets = await getUserTweets(params.name, prisma)
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      userValid: true,
      name: params.name,
      tweets,
    },
  }
}