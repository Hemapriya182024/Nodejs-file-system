

# Node.js Express File Handling Server

This Node.js application uses Express framework to create an API server that handles file operations like writing timestamps to files and reading all files in a directory.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:6000` by default. You can modify the port in `index.js` if needed.

## Endpoints

### 1. Homepage

- **Route:** `/`
- **Description:** Displays available endpoints for file operations.
- **Example Response:**
  ```
  <div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center">
    <h1>Endpoint to write a file with timestamp: /writefile</h1>
    <h1>Endpoint to read all files in the folder: /readallfiles</h1>
  </div>
  ```

### 2. Write File

- **Route:** `/writefile`
- **Method:** GET
- **Description:** Writes the current timestamp to a text file in the `timestamps` directory.
- **Example Response:** (if successful)
  ```
  File successfully written: 13-07-2024-17-30-00.txt
  ```

  **Example Response:** (if directory does not exist and is created)
  ```
  Directory created. File successfully written: 13-07-2024-17-30-00.txt
  ```

### 3. Read All Files

- **Route:** `/readallfiles`
- **Method:** GET
- **Description:** Retrieves a list of all filenames in the `timestamps` directory.
- **Example Response:** (if files exist)
  ```
  ["13-07-2024-17-30-00.txt", "13-07-2024-17-32-15.txt", ...]
  ```

  **Example Response:** (if no files exist)
  ```
  No files found.
  ```

## Deployment

This application is deployed on [Render.com](https://nodejs-file-system-2.onrender.com/). You can access it [here](https://nodejs-file-system-2.onrender.com/).

## Directory Structure

```
├── index.js            # Main application file
├── timestamps/         # Directory for storing timestamp files
└── node_modules/       # Node.js modules (auto-generated)
```

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **fs**: File system module for handling file operations.
- **date-fns**: Modern JavaScript date utility library.

## Notes

- Ensure the `timestamps` directory is writable by the server process.
- This server currently runs on port 6000 by default. Modify `PORT` in `index.js` as needed. 

