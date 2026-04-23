# Lab 13 – React with Express

## Setup

Install dependencies:
```bash
npm install
```

## Run the app (2 terminals)

Start Babel watcher (terminal 1):
```bash
npm run watch
```

Start server (terminal 2):
```bash
npm start
```

## Access

Open in browser:
```
http://localhost:3000
```

## Notes

- React is loaded via CDN
- JSX is compiled using Babel CLI
- Express serves static files from `/public`
- A local server is required because browsers block loading local files (CORS)