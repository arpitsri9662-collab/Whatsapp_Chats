💬 WhatsApp Chats Web App

A simple and interactive WhatsApp Chat Viewer Web Application built using Node.js, Express, and MongoDB. This project allows users to view, manage, and interact with chat-style data in a clean UI.

🚀 Live Demo: https://whatsapp-chats.onrender.com

📌 Features
📱 WhatsApp-like chat interface
🧾 Create, edit, and delete chat messages
💾 MongoDB database integration
⚡ Fast and lightweight Express backend
🎨 Clean and responsive UI
🌐 Deployed on Render
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB Atlas (Mongoose)
Frontend: EJS / HTML / CSS (or your stack)
Deployment: Render
📂 Project Structure
whatsapp-chats/
│
├── models/
│   └── chat.js
├── views/
│   └── (EJS templates)
├── public/
│   └── styles.css
├── index.js
├── ExpressError.js
├── package.json
└── README.md
🚀 How to Run Locally

# Move into project folder
cd whatsapp-chats

# Install dependencies
npm install

# Create .env file
ATLASDB_URL=your_mongodb_connection_string

# Start server
node index.js

Then open:

http://localhost:3000
🌍 Deployment (Render)
Push your code to GitHub
Connect repo on Render
Add environment variable:
ATLASDB_URL

Set build command:

npm install

Set start command:

node index.js
🔐 Environment Variables
Variable	Description
ATLASDB_URL	MongoDB connection string
📸 Preview

👉 Live App: https://whatsapp-chats.onrender.com

🧠 Learnings
CRUD operations with MongoDB
Express routing & middleware
Server deployment on Render
Environment variable management
📄 License

This project is open-source and available under the MIT License.

