interface InterpData {
  init?: number;
  end?: number;
}

export interface PictData {
  file:  string;
  scale?: InterpData;
  blur?: InterpData;
  brightness?: InterpData;
}

// TEMP until we implement WeightedList
export const backs: PictData[] = [
  {
    file:  "cortex.scarlet.jpg",
    blur:  { init: 4, end: 2 },
    brightness: { init: 80, end: 100 },
  },
  {
    file:  "cortex.violet.jpg",
    blur:  { init: 3, end: 1 },
    brightness: { init: 94, end: 100 },
  },
  {
    file:  "cortex.blue.jpg",
    blur:  { init: 6, end: 2 },
    brightness: { init: 94, end: 100 },
  },
  {
    file:  "hex.blue.2.png",
    scale: { end: 135 },
    blur:  { init: 4, end: 2 },
    brightness: { init: 40, end: 100 },
  },
  {
    file:  "cortex.hex.blue.jpg",
    scale: { init: 120, end: 150 },
    blur:  { init: 6, end: 2 },
    brightness: { init: 50, end: 80 },
  },

  {
    file:  "geometric.cyber.jpg",
    scale: { init: 160, end: 110 },
    blur:  { init: 10, end: 4 },
    brightness: { init: 40, end: 60 },
  },

  {
    file:  "manifold.1.png",
    scale: { end: 115 },
    blur:  { init: 16, end: 2 },
    brightness: { init: 50, end: 25 },
  },
  {
    file:  "manifold.4.png",
    scale: { end: 110 },
    blur:  { init: 12, end: 2 },
    brightness: { init: 40, end: 25 },
  },
  {
    file:  "firewatch.4.jpg",
    scale: { end: 145 },
    blur:  { init: 7, end: 2 },
    brightness: { init: 70, end: 80 },
  },

  {
    file:  "drytron.jpg",
    scale: { end: 130 },
    blur:  { init: 12, end: 4 },
    brightness: { init: 40, end: 60 },
  },

  {
    file:  "soul.necropolis.1.jpg",
    blur:  { init: 4, end: 6 },
    brightness: { init: 80, end: 50 },
  },
];
