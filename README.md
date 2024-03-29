<div align="center">
  <img src="https://teslahunt.io/banner-red.png" alt="@teslahunt/title">
  <br><br>
</div>

![Last version](https://img.shields.io/github/tag/teslahunt/tesla-images.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/teslahunt/tesla-images.svg?style=flat-square)](https://coveralls.io/github/teslahunt/tesla-images)
[![NPM Status](https://img.shields.io/npm/dm/tesla-images.svg?style=flat-square)](https://www.npmjs.org/package/tesla-images)

> Generate Tesla Model S/3/X/Y 3D photo visualizations.

## Install

```bash
$ npm install tesla-images --save
```

## Usage

There are two ways for getting Tesla stock images:

- Tesla sells some vehicles under CPO terms and they have real pictures of it.
- Tesla has an internal API for generating a 3D visualization of any vehicle (used by their website).

This library combines both techniques providers, fallbacking one in the other one in case stock images are missing (that is the most probable thing).

```js
const teslaImages = require('tesla-images')

;(async () => {
  const images = await teslaImages({
    vin: '5YJSA7H21FF084652',
    modelLetter: 'S',
    optionCodes: ['ADPX2', 'AU01', 'DA02', 'APH1', 'APD2', 'X028']
  })
})()
```

## License

**tesla-images** © [Tesla Hunt](https://teslahunt.io), Released under the [MIT](https://github.com/microlinkhq/metascraper/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Tesla Hunt](https://teslahunt.io) with help from [contributors](https://github.com/microlinkhq/metascraper/contributors).

> [teslahunt.io](https://teslahunt.io) · GitHub [teslahunt](https://github.com/teslahunt) · Twitter [@teslahuntio](https://twitter.com/teslahuntio)
