import myNum from '../source/';
import * as assert from 'assert';

import 'mocha';

describe('MY_NUM', () => {
	it('SHOULD RETURN NUMBER IN WRITTEN FORM', () => {
		const my_num = new myNum(99999999);
		const { written } = my_num;
		assert.equal(
			written,
			'ကိုးကုဋေကိုးသန်းကိုးသိန်းကိုးသောင်းကိုးထောင်ကိုးရာကိုးဆယ်ကိုး'
		);
	});

	it('SHOULD RETURN FLOAT IN WRITTEN FORM', () => {
		const my_float = new myNum(9999.9999);
		const { written, numeral } = my_float;
		assert.equal(written, 'ကိုးထောင်ကိုးရာကိုးဆယ်ကိုးဒဿမကိုးကိုးကိုးကိုး');
	});

	it('SHOULD RETURN NUMBER IN BURMESE NUMBERL FORM', () => {
		const my_num = new myNum(99999999);
		const { numeral } = my_num;
		assert.equal(numeral, '၉၉၉၉၉၉၉၉');
	});

	it('SHOULD RETURN FLOAT IN BURMESE NUMERAL FORM', () => {
		const my_float = new myNum(9999.9999);
		const { numeral } = my_float;
		assert.equal(numeral, '၉၉၉၉.၉၉၉၉');
	});
});
