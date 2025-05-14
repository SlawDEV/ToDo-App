import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/database.config.js';
import taskRoute from './routes/task.route.js'

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();

app.use('/api/tasks', taskRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('x', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    }
    );
    
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
}
);