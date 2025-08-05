// 🚀 Optional Challenge:
// Simple Logger Middleware

//     Task: Every time the HTTP server receives a request, 
//     log the URL and timestamp to a server.log file using fs.appendFile

// fs.appendFile: A Node.js method that appends data to a file. 
// If the file doesn’t exist, it creates it; otherwise, it adds new data to the end.

import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';

const PORT = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Logger middleware function
async function loggerMiddleware(req, res, next) {
    try {
      const timestamp = new Date().toISOString(); // Get current timestamp in ISO format
      const requestUrl = req.url; // Get the URL of the request
      const logEntry = `[${timestamp}] ${requestUrl}\n`; // Format log entry
      await fs.appendFile(path.join(__dirname, 'server.log'), logEntry); // Append to server.log
    } catch (error) {
      console.error('Error writing to server.log:', error); // Log error to console but don't crash
    }
    next(); // Call next to proceed to the main request handler
  }
  
  const server = http.createServer(async (req, res) => {
    // Run logger middleware before handling the request
    await loggerMiddleware(req, res, () => {});
  
    try {
      if (req.method === 'GET') {
        let filepath;
        if (req.url === '/') {
          filepath = path.join(__dirname, 'public1', 'index2.html');
        } else if (req.url === '/about') {
          filepath = path.join(__dirname, 'public1', 'about1.html');
        } else if (req.url === '/contact') {
          filepath = path.join(__dirname, 'public1', 'contact1.html');
        } else {
          throw new Error('404 Error Page Not Found');
        }
        const data = await fs.readFile(filepath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
      } else {
        throw new Error('Method not allowed');
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Server error');
    }
  });
  
  server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });




//   Explanation of Changes

//   Logger Middleware:
  
//   The loggerMiddleware function takes req, res, and next as parameters.
//   req.url provides the URL path (e.g., /, /about).
//   new Date().toISOString() generates a timestamp like 2025-08-05T03:43:22.123Z.
//   The log entry is formatted as [timestamp] url\n for clarity (e.g., [2025-08-05T03:43:22.123Z] /about).
//   fs.appendFile writes the log entry to server.log in the project directory (__dirname).
//   The next() function is called to proceed to the main request handler. In this case, since we’re not chaining multiple middleware functions, next is just an empty function () => {}.
  
  
//   Integration:
  
//   The middleware is called with await loggerMiddleware(req, res, () => {}) before the main logic. This ensures every request is logged, even if it results in a 404 or 500 error.
  
  
//   Error Handling:
  
//   Errors in fs.appendFile are caught and logged to the console, so they don’t crash the server.
//   The middleware continues to next() even if logging fails, ensuring the server keeps running.
  
  
//   File Path:
  
//   path.join(__dirname, 'server.log') ensures the server.log file is created in the same directory as your script.



