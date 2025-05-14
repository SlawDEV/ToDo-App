import { create } from "zustand";
export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  createTask: async (newTask) => {
    if(!newTask.title){
        return {success: false, message: "Task title is required"}
    }
    const res = await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    set((state)=>({tasks: [...state.tasks, data.task]}));
    return {success: true, message: "Task created successfully"}
  },
    getAllTasks: async () => {
        const res = await fetch("api/tasks");
        const data = await res.json();
        set({ tasks: data.tasks });
    },
    getCompletedTasks: async () => {
        const res = await fetch("api/tasks/completed");
        const data = await res.json();
        set({ tasks: data.tasks });
    },
    getUncompletedTasks: async () => {
        const res = await fetch("api/tasks/uncompleted");
        const data = await res.json();
        set({ tasks: data.tasks });
    },
    deleteTask: async (id) => {
        const res = await fetch(`api/tasks/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        set((state) => ({
            tasks: state.tasks.filter((task) => task._id !== id),
        }));
        
    },
    completeTask: async (id) => {
        const res = await fetch(`api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ completed: true }),
        });
        const data = await res.json();
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task._id === id ? { ...task, completed: true } : task
            ),
        }));
    },
  
}));