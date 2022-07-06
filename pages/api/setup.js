import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) return res.end()

  if (req.method === 'POST') {
    const userExists= await prisma.user.findFirst({
        where: {
            name: req.body.name,
        },
    })
    if (userExists) {
      // console.log('User exists: ', req.body.name)
      return res.status(409).json({ message: `User name ${req.body.name} taken! Try another.` })

    }
    // else console.log('no exist: ', req.body.name)
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: req.body.name,
      },
    })

    return res.status(201).end()
  }
}