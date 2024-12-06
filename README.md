# rf-PRINT.WORK - Backend

This is a small RESTful Express API that follows MVC patterns to interact with the iTunes top 100 albums RSS feed.

## Hosted API

[Click here](https://rf-print-work-be.onrender.com/api/) to view the hosted version of the API.

## Summary

This API interacts with iTunes Top 100 Album RSS feed.

### Features

**GET** endpoints for retreiving all albums, paginated albums, and album details.

## Getting Started

Follow these instructions to get a copy of the project running locally.

### 1. Clone the repository

```bash
git clone https://github.com/Robf94/rf-PRINT.WORK-be.git
cd rf-PRINT.WORK-be
```

### 2. Install Dependencies

The following dependencies are required to run the project:

```
"devDependencies": {
  "husky": "^9.1.7",
  "jest": "^29.7.0",
  "supertest": "^7.0.0"
},
"dependencies": {
  "axios": "^1.7.8",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.21.1"
}
```

More info can be found in `package.json`. Run `npm install` to install the require dependencies.

```bash
npm install
```

### 3. Set Up Environment Variables

Create .env.production file.

.env.test

```makefile
ITUNES_API_BASE_URL=url
```

The URL will be sent directly to you via email.

### 4. Running the Tests

To run the test suite, use:

```bash
npm test
```

### 5. Running the API

To start the API locally, run:

```bash
npm start
```

This will start the server on http://localhost:9090.
