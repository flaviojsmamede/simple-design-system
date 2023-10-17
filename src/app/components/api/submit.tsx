import type { NextApiRequest, NextApiResponse } from 'next'

function createItem(data: any) {
  throw new Error('Function not implemented.')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  const id = await createItem(data)
  res.status(200).json({ id })
}
