// api/trades.js
const trades = [];

export default (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json(trades);
    } else if (req.method === 'POST') {
        const trade = req.body;
        trades.push(trade);
        res.status(201).json(trade);
    } else if (req.method === 'DELETE') {
        const { username } = req.body;
        const index = trades.findIndex(trade => trade.username === username);
        if (index !== -1) {
            trades.splice(index, 1);
            res.status(200).json({ message: 'Trade deleted successfully' });
        } else {
            res.status(404).json({ message: 'Trade not found' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
