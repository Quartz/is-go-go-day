// The static list of GO! GO! days in a year.
const GO_GO_DAYS: Array<string> = [
	'01-05',
	'01-15',
	'01-25',
	'02-05',
	'02-15',
	'02-25',
	'03-05',
	'03-15',
	'03-25',
	'04-05',
	'04-15',
	'04-25',
	'05-05',
	'05-15',
	'05-25',
	'06-05',
	'06-15',
	'06-25',
	'07-05',
	'07-15',
	'07-25',
	'08-05',
	'08-15',
	'08-25',
	'09-05',
	'09-15',
	'09-25',
	'10-05',
	'10-15',
	'10-25',
	'11-05',
	'11-15',
	'11-25',
	'12-05',
	'12-15',
	'12-25',
];

const isGoGoDay = ( date: Date = new Date() ) => date.getDate().toString().endsWith( '5' );

const getGoGoDays = ( year: number ) => {
	// Expect a reasonable year. This code will die.
	if ( year < 2000 || year >= 2100 ) {
		throw new Error( 'Please provide a year in this century.' );
	}

	return GO_GO_DAYS.map( it => `${year}-${it}` );
};

export {
	getGoGoDays,
	isGoGoDay,
};
