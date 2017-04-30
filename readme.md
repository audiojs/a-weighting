# a-weighting [![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

[![Greenkeeper badge](https://badges.greenkeeper.io/audiojs/a-weighting.svg)](https://greenkeeper.io/)

Perform A-weighting (and others) for a frequency.
Useful for creating believable spectrum images and audio measurements.

<img alt="A-weighting" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Acoustic_weighting_curves_%281%29.svg" width="400"/>

## Usage

[![npm install a-weighting](https://nodei.co/npm/a-weighting.png?mini=true)](https://npmjs.org/package/a-weighting/)

```js
var aWeight = require('a-weighting/a');
var ft = require('fourier-transform');

//get a-weighted frequencies
var frequencies = ft(waveform).map(function (magnitude, i, data) {
	var frequency = 22050 * i / data;

	return aWeight(frequency) * magnitude;
});
```

Note that weight function returns normalized `0..1` weight values, it does not do decibels calculation. If you need to convert weight to decibels, do `20 * Math.log(weight) / Math.log(10)`.

Implemented weights:

* [A-weighting](https://en.wikipedia.org/wiki/A-weighting)
* B-weighting
* C-weighting
* D-weighting
* Z-weighting (zero weighting)
* [ITU-R 468 weighting](https://en.wikipedia.org/wiki/ITU-R_468_noise_weighting)

## Credits

Thanks to all the specialists who researched and described these curves (years of work I guess) and wikipedia for detailed articles on this.

## Related

* [fourier-transform](https://github.com/scijs/fourier-transform) — fft fast implementation.
* [gl-spectrum](https://github.com/audio-lab/gl-spectrum) — spectrum rendering component.
* [Equal-loudness-contours](https://en.wikipedia.org/wiki/Equal-loudness_contour).