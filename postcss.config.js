module.exports = {
	plugins: [
		require('postcss-css-variables')({}),
		require('postcss-easy-import')({ prefix: '_' }),
		require('autoprefixer')({}),
		require('cssnano')(),
	]
}
