const path = require('path');

const svelte = require('rollup-plugin-svelte');
const resolve = require('@rollup/plugin-node-resolve');
const virtual = require('@rollup/plugin-virtual');

// Hydrated component

module.exports = {
	input: 'Colors',
	output: {
		format: 'iife',
		file: path.resolve(__dirname, 'server/static/Colors.js')
	},
	plugins: [
		virtual({
			Colors: `
				import Colors from '${path.resolve(__dirname,'server/components/Colors.svelte')}';
				window.Colors = Colors;
			`
		}),
		svelte({
			dev: false,
			emitCss: false,
			hydratable: true
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		})
	]
};