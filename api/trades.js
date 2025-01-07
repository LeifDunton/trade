const trades = [];
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { selling, lookingFor, username } = req.body;
        trades.push({ selling, lookingFor, username });
        return res.status(201).json({ message: 'Trade posted' });
    }

    if (req.method === 'GET') {
        return res.status(200).json(trades);
    }

    res.status(405).json({ message: 'Method not allowed' });
}
