import format from '../const/ten-to-billion.const';
import { written as value, float_name } from '../const/zero-to-nine.const';

export const toWords = (num: Number): String => {
	let num_int: Number = Math.floor(Number(num));
	let num_float: Number = Number(num) % Number(num_int);

	let num_float_string: String = '';

	let ans: String = '';
	let numlength: Number = `${num_int}`.length;

	if (numlength > 8) {
		return `${num}`;
	}

	ans = formatter(num_int);

	if (num_float) {
		let num_float_match: any = num.toString().match(/\w+$/gi);
		num_float_string = num_float_match !== null ? num_float_match[0] : '';
		num_float_string = num_float_string
			.split('')
			.map(str => {
				return value[Number(str)];
			})
			.join('');

		ans = ans.concat(String(float_name), String(num_float_string));
	}

	return ans;
};

const formatter = (num: Number): String => {
	let ans: String = '';
	let num_length = `${num}`.length;

	if (num_length) {
		`${num}`.split('').forEach((element, index) => {
			if (Number(element) !== 0) {
				ans = ans.concat(
					String(value[Number(element)]),
					String(format[8 + index - num_length])
				);
			}
		});
	}

	return ans;
};
