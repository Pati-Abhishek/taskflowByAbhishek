import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  tasks: Task[] = [];
  
  newTaskTitle: string = '';
  newTaskPriority: 'low' | 'medium' | 'high' = 'medium';
  newTaskDueDate: string = '';
  
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask(): void {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle.trim(),
      priority: this.newTaskPriority,
      dueDate: this.newTaskDueDate,
      completed: false
    };

    this.tasks.unshift(newTask);
    this.saveTasks();

    this.newTaskTitle = '';
    this.newTaskPriority = 'medium';
    this.newTaskDueDate = '';
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.saveTasks();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
  }

  get filteredTasks(): Task[] {
    if (this.currentFilter === 'active') {
      return this.tasks.filter(task => !task.completed);
    }
    if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    return this.tasks;
  }

  get remainingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks(): void {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        this.tasks = JSON.parse(saved);
      } catch (e) {
        this.tasks = [];
      }
    }
  }
}