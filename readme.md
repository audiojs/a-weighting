# a-weighting [![test](https://github.com/audiojs/a-weighting/actions/workflows/test.yml/badge.svg)](https://github.com/audiojs/a-weighting/actions/workflows/test.yml)

Standard frequency weighting curves (IEC 61672, ITU-R 468) for approximating equal-loudness contours of human ear.

<img alt="A-weighting" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Acoustic_weighting_curves_%281%29.svg" width="400"/>

## Usage

```js
import { a } from 'a-weighting'

// apply a-weighting to frequency spectrum
let weighted = frequencies.map((magnitude, i, data) => {
  let frequency = 22050 * i / data.length
  return a(frequency) * magnitude
})
```

Returns normalized `0..1` weight values, not decibels. To convert: `20 * Math.log10(weight)`.

### Weights

| Export | Standard | Description |
|--------|----------|-------------|
| `a` | [A-weighting](https://en.wikipedia.org/wiki/A-weighting) | General noise measurement |
| `b` | B-weighting | Moderate loudness |
| `c` | C-weighting | High loudness |
| `d` | D-weighting | Aircraft noise |
| `m` | [ITU-R 468](https://en.wikipedia.org/wiki/ITU-R_468_noise_weighting) | Telecommunications |
| `z` | Z-weighting | Flat (unity gain) |

## See also

- [audio-filter](https://github.com/audiojs/audio-filter) - Audio filters including IIR A/C/K weighting for sample processing.
- [Equal-loudness contours](https://en.wikipedia.org/wiki/Equal-loudness_contour)

<p align="center"><a href="./LICENSE">MIT</a> · <a href="https://github.com/krishnized/license">ॐ</a></p>
