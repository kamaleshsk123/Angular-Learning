import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-task-manager',
  imports: [ReactiveFormsModule, MatRadioModule, CommonModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  taskList: any[] = [];
  taskId: number | null = null;
  showUpdate = false;
  task = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('pending', [Validators.required]),
  });

  submitTask() {
    this.taskList.push(this.task.value);
    this.resetTask();
  }
  resetTask() {
    this.task.reset({
      title: '',
      description: '',
      status: 'pending',
    });
  }
  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }
  editTask(index: number) {
    this.taskId = index;
    this.showUpdate = true;
    this.task.setValue(this.taskList[index]);
  }

  updateTask() {
    if (this.taskId !== null) {
      this.taskList[this.taskId] = this.task.value;
    }
    this.showUpdate = false;
    this.resetTask();
  }
  cancelUpdate() {
    this.resetTask();
    this.showUpdate = false;
  }
}
