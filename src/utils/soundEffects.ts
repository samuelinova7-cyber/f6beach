/**
 * Retro Mini-Game Audio Synthesizer (Web Audio API)
 * Generates authentic 8-bit arcade and mini-game sound effects for buttons and real-time notifications.
 * Works seamlessly across all modern browsers with zero external audio assets.
 */

class MiniGameSoundEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private listeners: Set<(muted: boolean) => void> = new Set();
  private globalListenerAttached: boolean = false;

  constructor() {
    // Check saved mute preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('frances_surf_sound_muted');
      if (saved !== null) {
        this.muted = saved === 'true';
      }
    }
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('frances_surf_sound_muted', String(this.muted));
    }
    this.notifyListeners();
    // Play a preview sound if unmuting
    if (!this.muted) {
      this.playCoin();
    }
    return this.muted;
  }

  public subscribe(callback: (muted: boolean) => void): () => void {
    this.listeners.add(callback);
    callback(this.muted);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((fn) => fn(this.muted));
  }

  /**
   * Mini-Game Button Click Sound:
   * Crisp 8-bit arcade blip / tap (pitch slide up 600Hz -> 1100Hz in 50ms)
   */
  public playButtonClick(): void {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(1150, now + 0.05);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // Audio context might be restricted before first gesture
    }
  }

  /**
   * Mini-Game Notification Pop Sound:
   * Cheerful 8-bit arcade double-chime / powerup sparkle (E6 -> A6 chime arpeggio)
   */
  public playNotification(): void {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Note 1: 659.25 Hz (E5)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.09, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Note 2: 987.77 Hz (B5)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(987.77, now + 0.08);
      gain2.gain.setValueAtTime(0.12, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.22);

      // Note 3: 1318.51 Hz (E6) sparkle
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(1318.51, now + 0.16);
      gain3.gain.setValueAtTime(0.14, now + 0.16);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start(now + 0.16);
      osc3.stop(now + 0.38);
    } catch {
      // AudioContext handling
    }
  }

  /**
   * Classic Arcade Coin Sound
   */
  public playCoin(): void {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.07); // E6

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch {
      // AudioContext handling
    }
  }

  public playClick(): void {
    this.playButtonClick();
  }

  public playSelect(): void {
    this.playButtonClick();
  }

  public playOpen(): void {
    this.playCoin();
  }

  public playClose(): void {
    this.playButtonClick();
  }

  /**
   * Attach global click listener to make all buttons and links play mini-game sounds
   */
  public initGlobalButtonSound(): void {
    if (this.globalListenerAttached || typeof window === 'undefined') return;
    this.globalListenerAttached = true;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if clicked element or any parent is a button or clickable link
      const clickable = target.closest('button, a, [role="button"], input[type="submit"], input[type="button"]');
      if (clickable) {
        // Unlock audio context on user gesture
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        this.playButtonClick();
      }
    };

    window.addEventListener('click', handleClick, { passive: true });
  }
}

export const soundEffects = new MiniGameSoundEngine();
