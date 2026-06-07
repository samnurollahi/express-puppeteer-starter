# Express Puppeteer Boilerplate

A scalable and organized boilerplate for building browser automation and web scraping services using **Express.js** and **Puppeteer**.

---

## Features

- Express.js API structure
- Puppeteer browser management
- Reusable page handlers
- Modular scraper architecture
- Environment variable support
- Middleware support
- Clean and scalable folder structure

---

## Project Structure

```text
.
├── package.json
├── package-lock.json
└── src
    ├── app.js
    │
    ├── config
    │   └── .env
    │
    ├── controller
    │
    ├── middleware
    │
    ├── models
    │
    ├── routes
    │   └── router.js
    │
    ├── service
    │   ├── index.service.js
    │   │
    │   └── pup
    │       ├── browser.js
    │       ├── page.js
    │       │
    │       └── scraper
    │           └── google.scraper.js
    │
    └── utils
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/express-puppeteer-boilerplate.git
```

Move to the project directory:

```bash
cd express-puppeteer-boilerplate
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the `src/config` directory.

Example:

```env
PORT=3000
NODE_ENV=development
```

---

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## Architecture

### Routes

Responsible for defining API endpoints.

### Controllers

Handle incoming requests and outgoing responses.

### Services

Contain business logic and scraping workflows.

### Puppeteer Layer

- **browser.js** → Browser initialization and lifecycle management.
- **page.js** → Shared page actions and utilities.
- **scraper/** → Website-specific scraper implementations.

### Middleware

Authentication, validation, logging, and error handling.

### Utils

Reusable helper functions.

---

## Request Flow

```text
Client Request
      ↓
    Route
      ↓
 Controller
      ↓
   Service
      ↓
 Puppeteer
      ↓
 Response
```

---

## Example Use Cases

- Web Scraping
- Browser Automation
- SEO Data Collection
- Search Engine Result Scraping
- Data Extraction Services
- Automated Testing

---

## License

MIT
