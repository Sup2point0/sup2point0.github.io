import { FrozenWeightedList } from "@sup2.0/weighted-list";


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


export const backs = new FrozenWeightedList<PictData>
(
  // standard
  [
    10, { file:  "cortex.scarlet.jpg",
          blur:  { init: 4, end: 2 },
          brightness: { init: 80, end: 100 } }
  ],
  [
    10, { file:  "cortex.violet.jpg",
          blur:  { init: 3, end: 1 },
          brightness: { init: 94, end: 100 } }
  ],
  [
    5, { file:  "sunset.png",
          blur:  { init: 6, end: 4 },
          brightness: { init: 80, end: 80 } }
  ],

  // variety
  [
    4, { file:  "geometric.cyber.jpg",
          scale: { init: 160, end: 110 },
          blur:  { init: 10, end: 4 },
          brightness: { init: 40, end: 60 } }
  ],
  [
    4, { file:  "cortex.blue.jpg",
          blur:  { init: 6, end: 2 },
          brightness: { init: 94, end: 100 } }
  ],
  [
    4, { file:  "hex.blue.2.png",
          scale: { end: 135 },
          blur:  { init: 4, end: 2 },
          brightness: { init: 40, end: 100 } }
  ],
  [
    4, { file:  "cortex.hex.blue.jpg",
          scale: { init: 120, end: 150 },
          blur:  { init: 6, end: 2 },
          brightness: { init: 50, end: 80 } }
  ],

  // flavour
  [
    5, { file:  "manifold.1.png",
          scale: { end: 115 },
          blur:  { init: 16, end: 2 },
          brightness: { init: 50, end: 25 } }
  ],
  [
    5, { file:  "manifold.4.png",
          scale: { end: 110 },
          blur:  { init: 12, end: 2 },
          brightness: { init: 40, end: 25 } }
  ],

  // special
  [
    3, { file:  "firewatch.4.jpg",
          scale: { end: 145 },
          blur:  { init: 7, end: 2 },
          brightness: { init: 70, end: 80 } }
  ],
  [
    2, { file:  "drytron.jpg",
          scale: { end: 130 },
          blur:  { init: 12, end: 4 },
          brightness: { init: 40, end: 60 } }
  ],
  [
    1, { file:  "soul.necropolis.1.jpg",
          blur:  { init: 4, end: 6 },
          brightness: { init: 80, end: 50 } }
  ],
);
