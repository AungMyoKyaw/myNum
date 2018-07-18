import { toWords } from './lib/written.lib';
import { toNumeral } from './lib/numeral.lib';

class myNum {
	private en_num: Number;

	constructor(number: Number) {
		this.en_num = number;
	}

	get written(): String {
		return toWords(this.en_num);
	}

	get numeral(): String {
		return toNumeral(this.en_num);
	}
}

export default myNum;

module.exports = myNum;
module.exports.default = myNum;
