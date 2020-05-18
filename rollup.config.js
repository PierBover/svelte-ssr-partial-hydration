const path = require('path');

const svelte = require('rollup-plugin-svelte');
const resolve = require('@rollup/plugin-node-resolve');
const virtual = require('@rollup/plugin-virtual');
const {terser} = require('rollup-plugin-terser');

// Hydrated components

const components = ['Colors', 'Now'];

module.exports = components.map((component) => ({
	input: component,
	output: {
		format: 'iife',
		file: path.resolve(__dirname, 'server/static/', component + '.js')
	},
	plugins: [
		virtual({
			[component]: `
				import ${component} from '${path.resolve(__dirname,'server/components/', component + '.svelte')}';
				window.${component} = ${component};
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
		}),
		terser()
	]
}));