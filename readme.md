# myNum

> Number to Burmese Words

[![Build Status][travis]][travis-url]
[![code style: prettier][prettier]][prettier-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]

## Installation

## npm

```shell
npm install --save mynum
```

## web

```html
<script src="https://unpkg.com/mynum@latest/dist/web/mycal.min.js"></script>
```

## API

- [written](#written)
- [numeral](#numeral)

### written

```javascript
const myNum = require('mynum');
const my_num = new myNum(99999999);
const { written } = my_num;
console.log(written); //ကိုးကုဋေကိုးသန်းကိုးသိန်းကိုးသောင်းကိုးထောင်ကိုးရာကိုးဆယ်ကိုး
```

```javascript
const my_float = new myNum(9999.9999);
const { written } = my_float;
console.log(written); //ကိုးထောင်ကိုးရာကိုးဆယ်ကိုးဒဿမကိုးကိုးကိုးကိုး
```

### numeral

```javascript
const myNum = require('mynum');
const my_num = new myNum(99999999);
const { numeral } = my_num;
console.log(numeral); //၉၉၉၉၉၉၉၉
```

```javascript
const my_float = new myNum(9999.9999);
const { numeral } = my_float;
console.log(numeral); //၉၉၉၉.၉၉၉၉
```

## Test

```shell
npm t
```

## Build

```
npm run build
```

## License

[MIT](./LICENSE)

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contri-url]: https://github.com/AungMyoKyaw/myNum/issues
[travis]: https://img.shields.io/travis/AungMyoKyaw/myNum/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AungMyoKyaw/myNum
[npm-download]: https://img.shields.io/npm/dt/mynum.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/mynum
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
