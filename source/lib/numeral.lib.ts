import { numeral as myanmarNumber } from '../const/zero-to-nine.const';

export const toNumeral = (number: Number): String => {
	let en: String = `${number}`;
	let myNumeral: String = '';

	en.trim()
		.split('') //split number
		.forEach(n => {
			//convert to burmese numeral
			myNumeral = myNumeral.concat(String(myanmarNumber[+n] || n));
		});

	return myNumeral;
};
