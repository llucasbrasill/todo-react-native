import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(oldTasks => [...oldTasks, newTask]);

  }

  function handleToggleTaskDone(id: number) {

    const myTask = tasks.filter(task => task.id === id);
    const myTasksForUpdate = tasks.filter(task => task.id !== id);
    myTask && setTasks([...myTasksForUpdate, {
        id: myTask[0].id,
        title: myTask[0].title,
        done: !myTask[0].done,
      }]);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const myTasks = tasks.filter(task => task.id !== id);
    myTasks && setTasks(myTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})