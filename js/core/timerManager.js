// BankMock Pro - Precision Timer Manager
// Handles sectional timers, composite timers, 5-minute warnings, and auto-submit

export class TimerManager {
  constructor(options = {}) {
    this.totalSeconds = options.durationMinutes ? options.durationMinutes * 60 : 1200;
    this.remainingSeconds = this.totalSeconds;
    this.intervalId = null;
    this.onTick = options.onTick || (() => {});
    this.onExpire = options.onExpire || (() => {});
    this.onWarning = options.onWarning || (() => {});
    this.isPaused = false;
    this.warningFired = false;
  }

  start() {
    if (this.intervalId) clearInterval(this.intervalId);
    this.isPaused = false;

    this.intervalId = setInterval(() => {
      if (this.isPaused) return;

      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.onTick(this.getFormattedTime(), this.remainingSeconds);

        if (this.remainingSeconds === 300 && !this.warningFired) {
          this.warningFired = true;
          this.onWarning(5); // 5 minutes remaining warning
        } else if (this.remainingSeconds === 60) {
          this.onWarning(1); // 1 minute warning
        }
      } else {
        this.stop();
        this.onExpire();
      }
    }, 1000);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset(durationMinutes) {
    this.stop();
    this.totalSeconds = durationMinutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.warningFired = false;
  }

  getFormattedTime() {
    const hours = Math.floor(this.remainingSeconds / 3600);
    const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
    const seconds = this.remainingSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0');

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  getTimeSpentSeconds() {
    return this.totalSeconds - this.remainingSeconds;
  }
}
