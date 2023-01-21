const octave = 5;

const baseNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const notes = [...Array(octave)].flatMap((_, i) =>
  baseNotes
    .flatMap((note, j) =>
      j % 7 === 2 || j % 7 === 6 ? note : [note, `${note}#`],
    )
    .map((note) => `${note}${i + 2}`),
);

class KeyState {
  public readonly length = octave * 12;
  public readonly whiteKeyLength = octave * 7;

  private state: Record<string, number> = Object.fromEntries(
    notes.map((note) => [note, 0]),
  );

  public activate(note: string) {
    this.state[note] += 1;
  }

  public deactivate(note: string) {
    this.state[note] = Math.max(0, this.state[note] - 1);
  }

  public isActiveAt(index: number, sharp?: boolean) {
    const note = getNoteByIndex(index, sharp);
    return this.state[note];
  }

  public reset() {
    Object.keys(this.state).forEach((key) => {
      this.state[key] = 0;
    });
  }
}

export const keyState = new KeyState();

export function getNoteByIndex(index: number, sharp?: boolean) {
  const octave = Math.floor(index / 7) + 2;
  return `${baseNotes[index % 7]}${sharp ? '#' : ''}${octave}`;
}

document.addEventListener('visibilitychange', () => {
  keyState.reset();
});
