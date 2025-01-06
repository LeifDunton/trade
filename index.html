<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trading Platform</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding-top: 30px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        section {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        button {
            background: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background: #0056b3;
        }

        h2 {
            color: #333;
        }

        .trade-offers {
            grid-column: span 2;
        }

        .trade-offer {
            background: #e9e9e9;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .trade-offer h3 {
            margin-top: 0;
        }

        .offer-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }

        .offer-buttons button {
            margin-left: 5px;
        }

        .offer-form input,
        .offer-form textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .offer-form button {
            width: 100%;
        }

        .message-box {
            display: none;
            background-color: #f8f8f8;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-top: 20px;
        }

        .message-box textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Trading Platform</h1>
        </header>

        <main>
            <section class="trade-form">
                <h2>Place a Trade Offer</h2>
                <form id="trade-form">
                    <label for="selling">Selling:</label>
                    <textarea id="selling" placeholder="What are you selling?" required></textarea>

                    <label for="looking-for">Looking for:</label>
                    <textarea id="looking-for" placeholder="What are you looking for?" required></textarea>

                    <label for="username">Your Username:</label>
                    <input type="text" id="username" placeholder="Enter your username" required>

                    <button type="submit">Post Offer</button>
                </form>
            </section>

            <section class="trade-offers">
                <h2>Trade Offers</h2>
                <div id="offers-list">
                    <!-- Trade offers will appear here -->
                </div>
            </section>
        </main>
    </div>

    <div class="message-box" id="message-box">
        <h3>Send Message</h3>
        <textarea id="message-text" placeholder="Type your message here..." required></textarea>
        <button id="send-message">Send Message</button>
        <button id="close-message-box">Close</button>
    </div>

    <script>
        const form = document.getElementById('trade-form');
        const offersList = document.getElementById('offers-list');
        const messageBox = document.getElementById('message-box');
        const sendMessageButton = document.getElementById('send-message');
        const closeMessageButton = document.getElementById('close-message-box');
        let currentUsername = null;
        let currentOffer = null;

        async function loadOffers() {
            const response = await fetch('/api/trades');
            const trades = await response.json();
            offersList.innerHTML = '';
            trades.forEach(offer => {
                const offerElement = document.createElement('div');
                offerElement.classList.add('trade-offer');
                offerElement.innerHTML = `
                    <h3>Selling: ${offer.selling}</h3>
                    <p>Looking for: ${offer.lookingFor}</p>
                    <p>Posted by: ${offer.username}</p>
                    <div class="offer-buttons">
                        <button onclick="openMessageBox('${offer.username}', '${offer.selling}')">Message</button>
                        <button onclick="deleteOffer('${offer.username}')">Delete</button>
                    </div>
                `;
                offersList.appendChild(offerElement);
            });
        }

        form.addEventListener('submit', async function (event) {
            event.preventDefault();
            const selling = document.getElementById('selling').value;
            const lookingFor = document.getElementById('looking-for').value;
            const username = document.getElementById('username').value;

            const response = await fetch('/api/trades', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ selling, lookingFor, username })
            });

            if (response.ok) {
                loadOffers();  // Refresh the list
                form.reset();
            }
        });

        function openMessageBox(username, offer) {
            currentUsername = username;
            currentOffer = offer;
            messageBox.style.display = 'block';
        }

        sendMessageButton.addEventListener('click', function () {
            const messageText = document.getElementById('message-text').value;
            if (messageText.trim() === '') {
                alert('Please enter a message!');
                return;
            }
            console.log(`Message to ${currentUsername} about ${currentOffer}: ${messageText}`);
            alert('Message sent!');
            messageBox.style.display = 'none';
            document.getElementById('message-text').value = ''; 
        });

        closeMessageButton.addEventListener('click', function () {
            messageBox.style.display = 'none';
            document.getElementById('message-text').value = ''; 
        });

        async function deleteOffer(username) {
            const response = await fetch('/api/trades', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username })
            });

            if (response.ok) {
                loadOffers();  // Refresh the list after deleting
            }
        }

        loadOffers();  // Load initial offers when the page loads
    </script>
</body>
</html>
