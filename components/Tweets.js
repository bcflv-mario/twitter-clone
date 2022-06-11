import Tweet from 'components/Tweet'

export default function Tweets({ tweets, nolink }) {
  if (!tweets) return (<p>No Tweet</p>)

  return (
    <>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} nolink={nolink}/>
      ))}
    </>
  )
}