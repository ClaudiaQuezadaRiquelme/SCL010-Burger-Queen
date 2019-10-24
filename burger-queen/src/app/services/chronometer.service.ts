import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChronometerService {

  startTime: Date;
  nowTime: Date;

  constructor() { }

  startCounterTime(timestamp: Date) {
    this.startTime = timestamp;
    this.nowTime = new Date();
    const timeDiff = this.nowTime.getTime() - this.startTime.getTime(); // in ms
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(timeDiff / 60000);
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(hours / 24);
    const result = 'DD:' + days + ' HH:' + hours % 24 + ' MM:' + minutes % 60 + ' SS:' + seconds % 60;
    // console.log(result);
    return result;
  }

}
