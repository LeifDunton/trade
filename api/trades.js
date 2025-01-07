// api/trades.js
const trades = []; // In-memory storage for trade offers

export default (req, res) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const [username] = token.split('-'); // Extract username from token

    if (req.method === 'GET') {
        return res.status(200).json(trades);
    }

    if (req.method === 'POST') {
        const { selling, lookingFor } = req.body;
        trades.push({ username, selling, lookingFor });
        return res.status(201).json({ message: 'Trade created.' });
    }

    if (req.method === 'DELETE') {
        const { tradeId } = req.body;
        const index = trades.findIndex(t => t.username === username && t.id === tradeId);
        if (index === -1) return res.status(404).json({ message: 'Trade not found.' });

        trades.splice(index, 1);
        return res.status(200).json({ message: 'Trade deleted.' });
    }
    res.status(405).json({ message: 'Method not allowed.' });
};
