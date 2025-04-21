# 🤖 Bot Battlr - React App

Welcome to **Bot Battlr**, web app where you can browse through a collection of bots, view their specs, and build your own elite bot army! This mini React project helps practice components, props, state, events, and data fetching using `json-server`.

---

## 🚀 Features

### ✅ Core Deliverables
- View all bots from the database in a visually appealing grid.
- Click a bot to enlist it into **Your Bot Army** (once only).
- Release a bot from your army by clicking it in the army.
- Permanently discharge a bot by clicking the red ❌, which deletes it from both frontend and backend.

### 🌟 Advanced Features
- View bot details (BotSpecs) with options to enlist or go back.
- Remove enlisted bots from the main collection.
- Sort bots by `health`, `damage`, or `armor` using a `SortBar`.
- Filter bots by multiple `bot_class` options.
- Only allow one bot per class in the army.

---

## 🛠️ Tech Stack

- **React**
- **CSS Grid & Flexbox**
- **JSON Server** (for local backend API)
- **JavaScript (ES6)**

---

## 📁 Project Structure

bot-battlr/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BotCard.jsx         
│   │   ├── BotCollection.jsx   
│   │   ├── YourBotArmy.jsx     
│   │   ├── BotSpecs.jsx        
│   │   └── SortBar.jsx         
│   ├── App.jsx                 
│   ├── App.css                 
│   └── main.jsx                
├── db.json                    
├── package.json               
├── README.md                  
└── vite.config.js     


---


---

## 🔧 Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/Kihikah/bot-battlr.git
cd bot-battlr

*** 2. Install Dependencies

npm install

### 3. Run the Backend (JSON Server)

npx json-server --watch db.json --port 8001

Verify the API:
Visit **http://localhost:8001/bots** in your browser.

### 4. Start the Frontend

npm run dev

Open your browser to:
http://localhost:5173 (if using Vite)

### Short Vedio




### Notes
- Ensure your db.json contains at least 20 bots.
- You must only enlist one bot per class in the army.
- Red ❌ button deletes the bot permanently from the database.

### Author

- Kariuki Kihikah
- 📧 kariukikihikah@gmail.com
- 🔗 https://github.com/Kihikah

