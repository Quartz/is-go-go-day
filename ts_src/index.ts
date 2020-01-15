const isGoGoDay = ( date: Date = new Date() ) => date.getDate().toString().endsWith( '5' );

export {
	isGoGoDay,
};
