# 🚀 GitSniff

> Explore developers, visualize profiles, and analyze GitHub repos — effortlessly!

![GitHub stars](https://img.shields.io/github/stars/Saquib-Anjum/git-sniff?style=social)
![GitHub forks](https://img.shields.io/github/forks/Saquib-Anjum/git-sniff?style=social)

---

## 🔐 OAuth-Powered by Passport.js

GitSniff lets users log in securely with **GitHub OAuth** using Passport.js. With just one click, users can explore and analyze GitHub developer profiles in depth.

---

## 🔍 Features

- 🔐 **GitHub Login** — Secure OAuth with `passport-github2`
- 🧠 **Personalized Dashboard** — See your GitHub data cleanly
- 🌐 **Search Users** — Look up developers by GitHub username
- 📦 **Repo Explorer** — Get a clean, linkable list of public repositories
- 💻 **Filter by Language** — Explore users by their dominant tech stack
- ❤️ **Like Profiles** — Like developers, and see who liked you
- 🧹 **Clean UI** — Minimal and intuitive interface

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js (GitHub Strategy)
- **Database**: MongoDB (with Mongoose)
- **Deployment**: Vercel

---

## 🧪 How It Works

1. User logs in with GitHub via Passport OAuth
2. Backend fetches user info and repos using GitHub API
3. User can:
   - Like other profiles
   - Search for any GitHub user
   - Explore by programming language
   - View who liked them back!

---

## 🚀 Getting Started (Development)

### Backend
```bash
cd backend
npm install
npm run dev
