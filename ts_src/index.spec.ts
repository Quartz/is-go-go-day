import {
	isGoGoDay
} from '.';

import 'mocha';
import { expect } from 'chai';

describe( 'isGoGoDay', () => {
	expect( isGoGoDay(new Date( '2019-12-24T00:00:00.000-05:00' ) )).to.be.false;
	expect( isGoGoDay(new Date( '2019-12-25T00:00:00.000-05:00' ) )).to.be.true;
});