/**
 * Web Audio API synthesized futuristic sound effects.
 * 100% client-side, zero external audio asset dependencies.
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false; // default to false (polite / accessible)

  constructor() {
    // AudioContext will be lazily initialized on first user interaction
  }

  public setEnabled(enable: boolean) {
    this.enabled = enable;
    if (enable && !this.ctx) {
      this.initContext();
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  private initContext() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch {
      this.ctx = null;
    }
  }

  public playHover() {
    if (!this.enabled) return;
    this.playTone(880, 0.04, 'sine', 0.015);
  }

  public playClick() {
    if (!this.enabled) return;
    this.playTone(520, 0.06, 'triangle', 0.04);
    setTimeout(() => {
      this.playTone(1040, 0.04, 'sine', 0.02);
    }, 30);
  }

  public playSuccess() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 0.12, 'sine', 0.035);
      }, idx * 60);
    });
  }

  public playBoot() {
    if (!this.enabled) return;
    const freqs = [220, 330, 440, 660, 880];
    freqs.forEach((f, i) => {
      setTimeout(() => {
        this.playTone(f, 0.08, 'sine', 0.03);
      }, i * 70);
    });
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.03) {
    try {
      if (!this.ctx) {
        this.initContext();
      }
      if (!this.ctx) return;

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext policy catch
    }
  }
}

export const sounds = new SoundManager();
