# is-go-go-day

Determine if a day is a GO! GO! Day.

```js
const { isGoGoDay } = require( '@quartz/is-go-go-day' );

console.log( isGoGoDay() );

console.log( isGoGoDay( new Date('2020-01-14') ) );

console.log( isGoGoDay( new Date('2020-01-15T00:00:00-05:00') ) );
```

# Development

To build: `npm run build`

To run tests: `npm test`

To run lint: `npm run lint` To autofix: `npm run lint:fix`
