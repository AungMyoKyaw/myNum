# myNum

> Number to Burmese Words

[![Build Status][travis]][travis-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]
[![NSP Status][nsp]][nsp-url]

## Installation

## npm

```shell
npm install --save mynum
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

### numeral

```javascript
const myNum = require('mynum');
const my_num = new myNum(99999999);
const { numeral } = my_num;
console.log(numeral); //၉၉၉၉၉၉၉၉
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

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat
[contri-url]: https://github.com/AungMyoKyaw/myNum/issues
[travis]: https://travis-ci.org/AungMyoKyaw/myNum.svg?branch=master
[travis-url]: https://travis-ci.org/AungMyoKyaw/myNum
[nsp]: https://nodesecurity.io/orgs/aung-myo-kyaw/projects/9ab1b8af-9026-4278-9665-97b44a8755a5/badge
[nsp-url]: https://nodesecurity.io/orgs/aung-myo-kyaw/projects/9ab1b8af-9026-4278-9665-97b44a8755a5
[npm-download]: https://img.shields.io/npm/dt/mynum.svg
[npm-dl-url]: https://www.npmjs.com/package/mynum
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
