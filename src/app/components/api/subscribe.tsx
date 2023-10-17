import { NextApiRequest, NextApiResponse } from 'next';

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { full_name, email, interest } = req.body;

    console.log('Received subscription request:');
    console.log(`Full Name: ${full_name}`);
    console.log(`Email: ${email}`);
    console.log(`Interest: ${interest}`);

    res.status(200).json({ message: 'Subscription request received' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default subscribe;
