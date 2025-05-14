import React, { useEffect, useState } from "react";
import { Box, Table, Button, HStack, Input, Spacer, Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useTaskStore } from "../TodaApp/task";
import { MdOutlineDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

const Content = () => {
  const {
    createTask,
    getAllTasks,
    getCompletedTasks,
    getUncompletedTasks,
    deleteTask,
    completeTask,
    tasks,
  } = useTaskStore();
  const [newTask, setNewTask] = React.useState({
    title: "",
  });
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = useState("all");
  const [taskToDelete, setTaskToDelete] = useState(null);
  useEffect(() => {
    if (filter === "all") {
      getAllTasks();
    }
    if (filter === "completed") {
      getCompletedTasks();
    }
    if (filter === "uncompleted") {
      getUncompletedTasks();
    }
  }, [filter, getAllTasks, getCompletedTasks, getUncompletedTasks]);

  const handleAddTask = async () => {
    const { success, message } = await createTask(newTask);
    console.log("Success:", success);
    console.log("Message:", message);
    if (success) {
      setNewTask({ title: "" });
    }
  };
  const handleDeleteTask = async () => {
    if (taskToDelete) {
        await deleteTask(taskToDelete);
        setTaskToDelete(null); // Close the dialog
      }
  };
  const handleCompleteTask = async (id) => {
    await completeTask(id);
  };
  const handleClickOpen = (id) => {
    //setOpen(true);
    setTaskToDelete(id);
  };

  const handleClose = () => {
    //setOpen(false);
    setTaskToDelete(null);
  };
    const handleCloseDelete = async (id) => {
        await deleteTask(id);
        setOpen(false);
    };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={0}
      bg="black"
      minHeight="100vh"
      gap={3}
      marginTop={0}
    >
      <FormControl >
        {/* <FormLabel id="demo-radio-buttons-group-label">Tasks</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          //defaultValue="all"
          //name="radio-buttons-group"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          row
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="uncompleted"
            control={<Radio />}
            label="Uncompleted"
          />
          <FormControlLabel
            value="completed"
            control={<Radio />}
            label="Completed"
          />
        </RadioGroup>
      </FormControl>
      <Table.ScrollArea
        borderWidth="1px"
        rounded="md"
        height={"30vw"}
        width={"90vw"}
        margin={0}
      >
        <Table.Root interactive={true} colorPalette={"blue"} size={"lg"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Title</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="right" paddingRight={15}>
                {" "}
                Actions
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tasks.map((task) => (
              <Table.Row
                key={task._id}
                bg={task.completed ? "gray.800" : "black"}
              >
                <Table.Cell
                  textDecoration={task.completed ? "line-through" : "none"}
                >
                  {task.title}
                </Table.Cell>
                <Table.Cell>
                  <Box display="flex" justifyContent="flex-end" gap={2}>
                    <Button
                      onClick={() => handleCompleteTask(task._id)}
                      colorScheme="green"
                      disabled={task.completed}
                    >
                      <MdDone />
                    </Button>
                    <Button
                      //TODO: Add a confirmation dialog before deleting
                      //onClick={() => handleDeleteTask(task._id)}
                      onClick={() => handleClickOpen(task._id)}
                      colorScheme="red"
                    >
                      <MdOutlineDelete />
                    </Button>
                    
                  </Box>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>

        {/* Confirmation Dialog */}
        <Dialog
        open={!!taskToDelete} // Open only if a task is selected for deletion
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={handleDeleteTask} color="error" >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Box >
        
        <HStack spacing={40}>
          <Input
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          
          <Button colorScheme="teal" size="md" onClick={handleAddTask}>
            Add Task
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};
export default Content;
