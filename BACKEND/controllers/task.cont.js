import Task from '../models/task.model.js';
import mongoose from 'mongoose';

export const createTask = async (req, res) => {
    const task = req.body;
    if (!task.title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const newTask = new Task(task);
    try {
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    }
    catch (error) {
        console.error("Error saving task",error);
        res.status(500).json({ message: 'Internal server error' });
    }    
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ message: 'Tasks fetched successfully', tasks });
    } catch (error) {
        console.error("Error fetching tasks",error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCompletedTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ completed: true });
        res.status(200).json({ message: 'Tasks fetched successfully', tasks });
    } catch (error) {
        console.error("Error fetching tasks",error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getUncompletedTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ completed: false });
        res.status(200).json({ message: 'Tasks fetched successfully', tasks });
    } catch (error) {
        console.error("Error fetching tasks",error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const completeTask = async(req,res)=>{
    const { id } = req.params;
    const task = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Task not found'});

    }

    try{
        const updatedTask = await Task.findByIdAndUpdate(id,task,{new:true});
        res.status(200).json({ message: 'Tasks updated successfully', updatedTask });
    }
    catch(error){
        console.error("Error updating tasks",error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteTask = async (req,res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Task not found'});

    }

    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({success:true, message: 'Tasks deleted successfully' });
    }
    catch(error){
        console.error('Error during deleting product', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}