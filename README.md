<<<<<<< HEAD
# ToDo App - Mobile application development lab 2

This app demonstrates component-based architecture by separating the ToDo list and form into individual components.

## Features

- Display a list of hard-coded tasks
- Add new tasks to the list
- Mark tasks as completed/incomplete
- Delete tasks from the list
- Clean and responsive UI design

## Project Structure

```
todo-app/
├── index.tsx          # Main App component
├── ToDoList.jsx       # Component for displaying the task list
├── ToDoForm.jsx       # Component for the input form
├── package.json       # Project dependencies and scripts
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## Components

### App (index.tsx)
- Main component that manages the application state
- Contains hard-coded initial tasks
- Handles task operations (add, toggle, delete)
- Renders the header, ToDoList, and ToDoForm components

### ToDoList (ToDoList.jsx)
- Displays the list of tasks in a scrollable view
- Handles task completion toggle and deletion
- Receives tasks and callback functions as props

### ToDoForm (ToDoForm.jsx)
- Provides input field for new tasks
- Handles form submission
- Receives form state and callback functions as props

## Assignment Requirements Completed

✅ **Part 1**: Hard-coded ToDo list and form in index.tsx  
✅ **Part 2**: Separated components into ToDoList.jsx and ToDoForm.jsx  
✅ **Part 3**: Imported and integrated separate components in index.tsx  

## Technologies Used

- React Native
- TypeScript
- React Hooks (useState)

## Author

Mhd Sami Rizk - Mobile application development course

=======
# toDoList
>>>>>>> 41f9c43036d860ef0550f1b477ba4f2b862e6946
