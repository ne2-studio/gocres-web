dev:
	hugo server --watch --logLevel info

publish: css
	HUGO_ENV=production hugo --minify --logLevel info

css:
	npm run css:build

css-watch:
	npm run css:watch
