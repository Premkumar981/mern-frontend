<h1 align="center">🛍️ Cup & Code</h1>
<h3 align="center">A MERN Stack Based E-Commerce Solution</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Server-Express.js-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/State%20Management-Context%20API-764ABC" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel" />
</p>

<p align="center">
  <a href="https://mern-frontend-beige-ten.vercel.app" target="_blank">🌐 Live Demo</a> •
  <a href="https://github.com/Premkumar981/mern-frontend" target="_blank">💻 GitHub Repo</a>
</p>

---

## 🚀 About the Project

**Cup & Code** is a full-stack **E-Commerce web application** built using the **MERN stack (MongoDB, Express, React, Node)**.  
It provides a seamless shopping experience for users and a **powerful admin dashboard** to manage products, orders, and users — all in **real-time**.

> 🎯 **Goal:** To build a scalable, secure, and modern e-commerce solution demonstrating real-world MERN architecture with a responsive UI and efficient backend APIs.

---

## 🧩 Features

### 👥 User Module
- 🔐 Secure registration & login using JWT authentication  
- 🛒 Add to cart, checkout, and order management  
- 📦 View order history and status  
- 💬 Real-time updates through Context API  
- 📱 Fully responsive interface (mobile-first design)

### 🧑‍💼 Admin Module
- 🧾 Dashboard overview of total users, products & orders  
- ➕ CRUD operations for Products  
- 👥 Manage Users (Add / Remove / Update roles)  
- 🚚 Update order status dynamically  
- 🔒 Protected routes using JWT & role-based access

### ⚙️ Technical Highlights
- ⚡ RESTful APIs built with Express.js  
- 🌐 Cloud database via MongoDB Atlas  
- 🧠 Global state management using Context API  
- 📡 Axios for API calls with interceptors  
- 🎨 Styled with responsive CSS  

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js, React Router DOM, Context API, Axios, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ORM) |
| **Authentication** | JSON Web Token (JWT) |
| **Hosting** | Vercel (Frontend) • Render (Backend) |

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Premkumar981/mern-frontend.git
cd mern-frontend
```

### 2️⃣ Setup Backend
```bash
cd server
npm install
```

### Create a .env file inside /server and add:
```bash
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Run backend:
```bash
npm start
```

### 3️⃣ Setup Frontend
```bash
cd ../client
npm install
npm start
```

Frontend will start at: http://localhost:3000

### 🧮 API Endpoints (Examples)
| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register new user           |
| POST   | `/api/auth/login`    | Login user                  |
| GET    | `/api/products`      | Fetch all products          |
| POST   | `/api/products`      | Add product (Admin)         |
| PUT    | `/api/products/:id`  | Update product (Admin)      |
| DELETE | `/api/products/:id`  | Delete product (Admin)      |
| GET    | `/api/orders`        | Get all orders (Admin/User) |

### 🔐 Authentication Flow
User signs in → JWT token generated
Token stored in localStorage
Token sent in Authorization headers for protected routes
Middleware validates token & role before granting access

### 🚀 Future Enhancements
💳 Payment Gateway Integration (Stripe / Razorpay)
🔍 Product Search & Filters
📧 Email Notifications for orders
📊 Admin Analytics Dashboard
🌙 Dark Mode Support

### 💡 Challenges & Solutions
| Challenge                         | Solution                                                    |
| --------------------------------- | ----------------------------------------------------------- |
| Real-time UI updates after CRUD   | Used Context API and Axios triggers to re-render components |
| Role-based route protection       | Implemented JWT middleware & conditional rendering          |
| CORS and deployment configuration | Used proper headers and `.env` environment variables        |
| Smooth data synchronization       | Managed global states effectively with Context API          |

### 👨‍💻 Author
<h3>Suru Prem Kumar</h3>
🎓 4th Year Web Development Student, Lovely Professional University
<br>
📍 Visakhapatnam, Andhra Pradesh, India
<br>
💼 Passionate about MERN Stack, Scalable Systems & UI/UX Design
<br><br>
<p align="center"> <a href="mailto:premkumar@example.com"><img src="https://img.shields.io/badge/Email-Contact-red?logo=gmail" /></a> <a href="https://linkedin.com/in/surupremkumar"><img src="https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin" /></a> <a href="https://github.com/Premkumar981"><img src="https://img.shields.io/badge/GitHub-Follow-black?logo=github" /></a> </p>

### ⭐ Support
If you found this project helpful, please consider giving it a ⭐ star on GitHub — it really helps and motivates future development!

<p align="center"> Made with ❤️ using <b>MERN Stack</b> </p>
