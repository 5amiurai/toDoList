import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <ScrollView style={styles.taskList}>
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskItem}>
          <TouchableOpacity
            style={[
              styles.taskText,
              task.completed && styles.completedTask
            ]}
            onPress={() => onToggleTask(task.id)}
          >
            <Text style={[
              styles.taskTextContent,
              task.completed && styles.completedTaskText
            ]}>
              {task.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDeleteTask(task.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    padding: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  taskText: {
    flex: 1,
    paddingRight: 10,
  },
  taskTextContent: {
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    opacity: 0.6,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ToDoList;

