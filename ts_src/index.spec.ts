import {
	isGoGoDay,
} from '.';

import 'mocha';
import { expect } from 'chai';

describe( 'isGoGoDay', () => {
	it( 'should work for any given dates', () => {
		expect( isGoGoDay( new Date( '2019-12-24T00:00:00-05:00' ) ) ).to.be.false;
		expect( isGoGoDay( new Date( '2019-12-25T00:00:00-05:00' ) ) ).to.be.true;
	} );
} );
