import express from 'express'
import {createTask, getAllTasks, getCompletedTasks, getUncompletedTasks, completeTask, deleteTask} from '../controllers/task.cont.js'
const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/completed', getCompletedTasks);
router.get('/uncompleted', getUncompletedTasks);
router.put('/:id', completeTask);
router.delete('/:id', deleteTask);
export default router;