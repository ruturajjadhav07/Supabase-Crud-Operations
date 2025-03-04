# Supabase CRUD with Vite.js

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using [Supabase](https://supabase.com/) as the backend and [Vite.js](https://vitejs.dev/) as the frontend framework.

## Features
- **Create** new records in Supabase
- **Read** data from Supabase
- **Update** existing records
- **Delete** records

## Technologies Used
- **Vite.js** (Fast frontend development tooling)
- **Supabase** (PostgreSQL backend with authentication and real-time capabilities)
- **React** (If applicable, for component-based UI)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/ruturajjadhav07/Supabase-Crud-Operations.git
cd folder name
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Supabase
1. Create a new project on [Supabase](https://app.supabase.io/).
2. Go to **Settings > API** and get your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
3. Create a `.env` file in the project root and add:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 4. Run the Project
```sh
npm run dev
```

## Deployment
To deploy your Vite.js project, consider using **Vercel**, **Netlify**, or **GitHub Pages**.

For Vercel:
```sh
npm run build
vercel deploy
```

