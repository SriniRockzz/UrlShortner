# URL Shortener

A full-stack web application that takes long URLs, generates compact unique identifiers, persists them in a database, and handles seamless redirection to the original destination[cite: 2].

---

## 🛠️ Tech Stack
* **Runtime:** Node.js[cite: 2]
* **Framework:** Express.js[cite: 2]
* **Database:** MongoDB (Mongoose ODM)[cite: 2]
* **Frontend/UI:** Bootstrap, HTML/CSS[cite: 2]

---

## ⚙️ How It Works
1. **URL Submission:** Users input a long URL into the web interface[cite: 2].
2. **Shortening Logic:** The server generates a unique, compact string token and pairs it with the original destination URL[cite: 2].
3. **Database Persistence:** Both the original URL and the generated short code are stored securely in MongoDB[cite: 2].
4. **Redirection:** When a user accesses the shortened URL route, the server queries the database and performs an instant HTTP redirect to the original page[cite: 2].

---

## 🚀 Key Features
* Clean, responsive user interface styled with Bootstrap[cite: 2].
* Rapid database lookup and routing mapping via Express and MongoDB.
* Full CRUD-style lifecycle for handling URL links.

---

## 📂 Project Structure
- `server.js`: Main application entry point, Express server configuration, and route handlers.
- `shortUrl.js`: Data models and database schema definitions.
- `package.json`: Project dependencies and scripts.
