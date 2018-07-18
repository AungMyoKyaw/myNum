import format from '../const/ten-to-billion.const';
import { written as value } from '../const/zero-to-nine.const';

export const toWords = (num: Number): String => {
	num = Math.floor(Number(num));

	format.reverse();

	let ans: String = '';
	let numlength: Number = `${num}`.length;

	if (numlength > 8) {
		return `${num}`;
	}

	ans = formatter(num);

	return ans;
};

const formatter = (num: Number): String => {
	let ans: String = '';

	if (`${num}`.length) {
		`${num}`.split('').forEach((element, index, arr) => {
			if (Number(element) !== 0) {
				ans = ans.concat(
					String(value[Number(element)]),
					String(format[8 + index - arr.length])
				);
			}
		});
	}

	return ans;
};
