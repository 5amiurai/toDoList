# ToDo App - Expo Version

A React Native ToDo application built with Expo for easy development and testing. This app demonstrates component-based architecture by separating the ToDo list and form into individual components.

## Features

- Display a list of hard-coded tasks
- Add new tasks to the list
- Mark tasks as completed/incomplete
- Delete tasks from the list
- Clean and responsive UI design
- Cross-platform compatibility (iOS, Android, Web)

## Project Structure

```
todo-app-expo/
├── App.tsx                    # Main App component
├── components/
│   ├── ToDoList.tsx          # Component for displaying the task list
│   └── ToDoForm.tsx          # Component for the input form
├── assets/                   # App icons and splash screens
├── app.json                  # Expo configuration
├── package.json              # Project dependencies and scripts
├── babel.config.js           # Babel configuration
├── tsconfig.json             # TypeScript configuration
├── .gitignore                # Git ignore file
└── README.md                 # This file
```

## Getting Started

### Prerequisites
- Node.js (version 16 or later)
- npm or yarn
- Expo CLI

### Installation

1. Install Expo CLI globally:
   ```bash
   npm install -g @expo/cli
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-app-expo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npx expo start
   ```

2. Choose how to run the app:
   - **Mobile Device**: Install "Expo Go" app and scan the QR code
   - **iOS Simulator**: Press `i` in the terminal (Mac only)
   - **Android Emulator**: Press `a` in the terminal
   - **Web Browser**: Press `w` in the terminal

## Components

### App (App.tsx)
- Main component that manages the application state
- Contains hard-coded initial tasks
- Handles task operations (add, toggle, delete)
- Renders the header, ToDoList, and ToDoForm components

### ToDoList (components/ToDoList.tsx)
- Displays the list of tasks in a scrollable view
- Handles task completion toggle and deletion
- Receives tasks and callback functions as props

### ToDoForm (components/ToDoForm.tsx)
- Provides input field for new tasks
- Handles form submission
- Receives form state and callback functions as props

## Assignment Requirements Completed

✅ **Part 1**: Hard-coded ToDo list and form in main component  
✅ **Part 2**: Separated components into ToDoList.tsx and ToDoForm.tsx  
✅ **Part 3**: Imported and integrated separate components in App.tsx  
✅ **Expo Conversion**: Converted to Expo project for easy running and testing

## Technologies Used

- React Native
- Expo
- TypeScript
- React Hooks (useState)

## Development Commands

- `npx expo start` - Start the development server
- `npx expo start --android` - Start and open on Android
- `npx expo start --ios` - Start and open on iOS
- `npx expo start --web` - Start and open in web browser
- `npx expo build` - Build the app for production

## Author

Student Assignment - React Native Development Course (Expo Version)

