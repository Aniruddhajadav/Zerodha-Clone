# Zerodha Clone 📈
A full-stack (MERN) web application clone of **Zerodha**, India’s leading stock brokerage platform. This project beautifully replicates both the public-facing marketing landing pages and the core functionalities of the immersive **Kite Dashboard** used for tracking and managing stock market portfolios.

## 🚀 Live Demo
* Insert your hosted link here if available *
> **Frontend / Landing Page:** [Live Demo Link](https://zerodha-clone-oo65.onrender.com)  
> **Kite Dashboard UI:** [Dashboard Link](https://zcdashb.netlify.app/)

## ✨ Features

### 🖥️ 1. Marketing & Landing Platform
* **Homepage:** Replicates Zerodha's clean UI featuring its core trust statistics, pricing highlights, ecosystem structure, and Varsity education portal.
* **Products Page:** Displays the complete product ecosystem (Kite, Console, Coin, Kite Connect API, Varsity).
* **Pricing & Support Page:** Interactive breakdown of brokerage charges, account opening fees, and a dedicated support ticket interface.
* **Secure API Layer:** JSON Web Tokens (JWT) and encrypted password mechanisms for user account management.

### 📊 2. Kite User Dashboard
* **Buy/Sell Action Windows:** Popup modals enabling simulation of instant market orders (modifying quantities, entry price, and transaction modes).
* **Holdings & Positions:** Detailed breakdowns of open long-term equity stocks and current active day-trading contracts.
* **Data Visualizations:** Dynamic graphs and interactive doughnut/vertical charts powered by `Chart.js` for visually evaluating asset distribution and portfolio balance.

## 🛠️ Tech Stack
**Frontend & Dashboard:**
* **React.js** (Functional Components, Hooks)
* **React Router DOM** (Multi-page Navigation)
* **Material UI (MUI) & Bootstrap** (Responsive Grid & Styling)
* **Chart.js / React-Chartjs-2** (Data Visualization)

**Backend & Database:**
* **Node.js** & **Express.js** (REST API Construction)
* **MongoDB** & **Mongoose** (Data Schemas & Object Modeling)
* **Dotenv** (Environment Variable Management)

## 🛠️ Tech Stack Breakdowns

The ecosystem is decoupled into three individual spaces:

### 1. Frontend (Marketing Web)
*   **Core:** React.js (Functional Components, Hooks)
*   **Styling:** Bootstrap 5 (Responsive layouts)
*   **Navigation:** React Router DOM (Multi-page Navigation)

### 2. Dashboard (Kite Terminal)
*   **Core:** React.js
*   **Components:** Material-UI (MUI) for a high-density data look
*   **Charts:** Chart.js & React-ChartJS-2 (Data Visualization)
*   **Networking:** Axios

### 3. Backend & Database
*   **Environment:** Node.js + Express.js
*   **Database:** MongoDB via Mongoose ODM
*   **Security:** JWT, Bcrypt.js, and CORS
*   **Dotenv** (Environment Variable Management)

## 📦 Project Structure
```text
├── backend/          # Express API server, Database schemas, and Auth middleware
├── dashboard/        # React trading terminal application (Kite interface)
└── frontend/         # React marketing website (Static informative subpages)
