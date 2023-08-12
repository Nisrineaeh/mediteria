import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.css']
})
export class ChronometreComponent {

  constructor() { }

  timer: any;
  isRunning = false;
  elapsedTime = 0;

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.elapsedTime++;
      }, 1000);
    }
  }

  stopTimer() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
    }
  }

  resetTimer() {
    this.elapsedTime = 0;
    this.isRunning = false;
    clearInterval(this.timer);
  }

  getFormattedTime(): string {
    const hours = Math.floor(this.elapsedTime / 3600);
    const minutes = Math.floor((this.elapsedTime % 3600) / 60);
    const seconds = this.elapsedTime % 60;

    return `${this.twoDigits(hours)}:${this.twoDigits(minutes)}:${this.twoDigits(seconds)}`;
  }

  twoDigits(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  @Output() recordingTimes: number[] = [];

  recordingTime() {
    if (this.isRunning) {
      this.recordingTimes.push(this.elapsedTime);
    }
  }

  getFormattedTimes(time: number): string {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${this.twoDigits(hours)}:${this.twoDigits(minutes)}:${this.twoDigits(seconds)}`;
  }


}
