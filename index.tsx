import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // Hard-coded initial tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Complete React Native assignment', completed: false },
    { id: 2, text: 'Study for upcoming exam', completed: true },
    { id: 3, text: 'Buy groceries', completed: false },
    { id: 4, text: 'Call mom', completed: false },
    { id: 5, text: 'Finish reading book', completed: true },
  ]);

  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskItem: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My ToDo List</Text>
      </View>

      <ToDoList 
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />

      <ToDoForm 
        newTask={newTask}
        onChangeText={setNewTask}
        onAddTask={addTask}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;

