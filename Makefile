install:
		npm install
		
publish:
		npm publish --dry-run

make lint:
		npx eslint .

brain-games:
		node bin/brain-games.js	

even:
		node bin/even.js

calc:
		node bin/calc.js

gcd:
		node bin/gcd.js

progression:
		node bin/progression.js
		
prime:
		node bin/prime.js
