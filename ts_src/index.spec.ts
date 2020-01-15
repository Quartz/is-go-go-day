import {
	isGoGoDay,
	getGoGoDays,
} from '.';

import 'mocha';
import { expect } from 'chai';

describe( 'isGoGoDay', () => {
	it( 'should work for any given dates', () => {
		expect( isGoGoDay( new Date( '2019-12-24T00:00:00-05:00' ) ) ).to.be.false;
		expect( isGoGoDay( new Date( '2019-12-25T00:00:00-05:00' ) ) ).to.be.true;
	} );
} );

describe( 'getGoGoDays', () => {
	it( 'should list all go go days for a given year', () => {
		expect( getGoGoDays( 2020 ) ).to.have.lengthOf( 36 );
		expect( getGoGoDays( 2020 )[0] ).to.equal( '2020-01-05' );
		expect( getGoGoDays( 2020 )[35] ).to.equal( '2020-12-25' );
	} );

	it( 'should throw an error', () => {
		expect( () => getGoGoDays( 1999 ) ).to.throw( Error );
	} );
} );
