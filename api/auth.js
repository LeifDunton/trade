const users = {}; // Temporary in-memory storage
export default function handler(req, res) {
    const { action, username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    if (action === 'signup') {
        if (users[username]) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        users[username] = { password };
        return res.status(201).json({ message: 'Signup successful' });
    }

    if (action === 'login') {
        if (users[username]?.password === password) {
            return res.status(200).json({ message: 'Login successful' });
        }
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(405).json({ message: 'Method not allowed' });
}
