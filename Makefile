install:
	npm ci

brain-games:
	node bin/brain-games.js

public:
	npm publish --dry-run

lint:
	npx eslint .