# Confetti API

This repository contains the backend API for the Confetti mobile‑first event planning platform. It exposes RESTful endpoints to manage users, vendors, services, bookings, payments and deliveries.

## Project structure

* `src/` – NestJS application source code
* `prisma/` – Prisma schema and migrations
* `test/` – Unit and integration tests

## Getting started

Ensure you have Node.js ≥ 18 and npm installed. Clone the repo and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`. Swagger docs are served at `/docs` when the app is running.
