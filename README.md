# ToDo App
Deployed version --> https://todo-app-4n8x.onrender.com

![Picture](https://private-user-images.githubusercontent.com/148549968/444176018-31e9fe7a-8ab6-49c8-b414-b0d995cdec10.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDczMjE2NTQsIm5iZiI6MTc0NzMyMTM1NCwicGF0aCI6Ii8xNDg1NDk5NjgvNDQ0MTc2MDE4LTMxZTlmZTdhLThhYjYtNDljOC1iNDE0LWIwZDk5NWNkZWMxMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNVQxNTAyMzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NzI4ZDQ4NDNiZjk1NmQ4YWFhYmJmOTQxN2NhMThlZjQ5NGM0NDJmZGUzZjVmMWZkNjc3OTllNjRmZWI2ZWRmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.sRfK781CQIxIEO1zrVXhB29XF3EWI_AWMPAKKyu1XGI)

## Description
A full-stack Todo application built with React (frontend), Express.js (backend), Node.js (backend) and MongoDB (database). This application allows users to manage their tasks by adding, completing, and deleting them.

### Features
* **Add Tasks:** Users can add new tasks to their to-do list.
* **Mark Tasks as Completed:** Users can mark tasks as completed.
* **Delete Tasks:** Users can delete tasks with a confirmation dialog.
* **Filter Tasks:** Users can filter tasks to view all, completed, or uncompleted tasks.

## Installation
Prerequisites:
* Node.js installed on your machine.
* MongoDB installed and running locally or a MongoDB Atlas connection string.

Steps:
1) Clone the repository:
```
git clone https://github.com/SlawDEV/ToDo-App.git

```
```
cd todoApp
```
2) Install all of the dependencies
```
npm run build
```
3) Create .env file in the root directory and add the following:
```
PORT=8080
MONGO_URI=your-mongodb-connection-string
```
4) Run the project
```
npm run start
```

