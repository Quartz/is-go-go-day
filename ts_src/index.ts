const isGoGoDay = ( date: Date = new Date() ) => {
	return date.getDate().toString().endsWith('5');
};

export {
	isGoGoDay,
};
