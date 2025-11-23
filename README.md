# CorePanel – SaaS Admin Dashboard Skeleton

![CorePanel](https://img.shields.io/badge/CorePanel-SaaS-blue)
![Next.js](https://img.shields.io/badge/Frontend-Next.js-brightgreen)
![Laravel](https://img.shields.io/badge/Backend-Laravel-red)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)

---

## Project Overview

CorePanel is a **full-stack SaaS-style admin dashboard skeleton** designed to demonstrate professional enterprise-level coding practices.  
It includes:

- Next.js + React + TypeScript frontend
- MUI components & responsive layout
- Laravel backend with MySQL and Sanctum API authentication
- Role-based authentication & basic CRUD API
- Ready-to-run setup for local development

This project serves as a **portfolio-ready showcase** of full-stack development skills for recruiters and employers.

---

## Features

**Frontend (Next.js + MUI)**  
- Login & JWT authentication  
- Dashboard placeholder for SaaS panels  
- Responsive UI components  
- API integration using Axios  

**Backend (Laravel + MySQL)**  
- RESTful API for Users CRUD  
- Sanctum-based API authentication  
- Testable routes for future extension  
- Structured folder hierarchy for maintainable code

---

## Folder Structure

```
corepanel/
├─ frontend/         # Next.js + React + MUI
│  ├─ src/components
│  ├─ src/context
│  ├─ src/hooks
│  ├─ src/pages
│  ├─ src/services
│  └─ src/styles
└─ backend/          # Laravel + MySQL
   ├─ app/Models
   ├─ app/Http/Controllers/API
   ├─ routes/api.php
   └─ database/migrations
```

---

## Screenshots / Demo

> Replace with actual screenshots or GIFs after implementing CRUD tables, charts, or dashboards.

![Login Page](https://via.placeholder.com/600x300?text=Login+Page)
![Dashboard](https://via.placeholder.com/600x300?text=Dashboard+Placeholder)

---

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, MUI, Axios  
- **Backend:** Laravel, Sanctum, MySQL  
- **Tools:** Node.js, Composer, npm, Git  
- **Optional:** Docker, Vercel (frontend), Forge/Heroku (backend)

---

## Getting Started

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Configure DB in .env
php artisan migrate --seed
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

**Frontend `.env.local`**
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## Usage

1. Open the frontend at [http://localhost:3000](http://localhost:3000)  
2. Use API-seeded credentials to login (`email: admin@example.com`, `password: password`)  
3. Explore dashboard placeholder and API endpoints via `/users` routes  

---

## Next Steps / Enhancements

- Add **CRUD tables** for users, roles, products  
- Add **charts & analytics** (ApexCharts or Recharts)  
- Implement **dark/light theme toggle**  
- Add **Docker-compose** for full-stack local development  
- Integrate **email notifications** and file uploads  
- Deploy frontend (Vercel/Netlify) and backend (Forge/Heroku)

---

## License

MIT License © 2025