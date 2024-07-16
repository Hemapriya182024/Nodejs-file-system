import express from "express";
import cors from "cors";
import fs from "fs"; // File handling
import { format } from "date-fns"; // Date formatting

const app = express();
const PORT = 6000; // New port number

app.use(cors());

app.get('/', (req, res) => { // Route for the homepage
  res.send( 
    `<div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center">
    <h1>Endpoint to write a file with timestamp: /writefile</h1>
    <h1>Endpoint to read all files in the folder: /readallfiles</h1>
    </div>`
  );
});

app.get('/writefile', (req, res) => { // Route to write a file
  let currentTime = new Date(); // Get the current date and time
  let formattedTime = format(currentTime, "dd-MM-yyyy-HH-mm-ss"); // Format the date and time
  const directoryPath = 'timestamps';
  const filePath = `${directoryPath}/${formattedTime}.txt`;

  // Check if the directory exists, if not create it
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }

  fs.writeFileSync(filePath, `${currentTime}`, 'utf8'); // Create a file with the current timestamp
  res.send(`The timestamp is ${currentTime}`);
});

app.get('/readallfiles', (req, res) => { // Route to read all files in the directory
  const directoryPath = "timestamps";
  if (!fs.existsSync(directoryPath)) {
    return res.send("Directory does not exist.");
  }
  const files = fs.readdirSync(directoryPath); // Get an array of file names in the directory

  res.send(files); // Send the array of file names
});

app.listen(PORT, () => { // Start the server
  console.log(`Server is running on port ${PORT}`);
});
