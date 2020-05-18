require('svelte/register');

const fs = require('fs');
const path = require('path');

const dev = process.env.DEV === 'true';

console.log('Starting server!');

// init
const fastify = require('fastify')({
	ignoreTrailingSlash: true,
	logger: true
});

fastify.register(require('fastify-compress'));

fastify.register(require('fastify-static'), {
	root: path.join(__dirname, 'static')
});

fastify.route({
	method: 'GET',
	url: '/',
	handler: (request, reply) => {
		const Page = require(`./components/Page.svelte`).default;

		const data = {
			fruits: ['Mango', 'Apple', 'Lemon'],
			hydration: {
				Colors_1: {
					colors: ['Red', 'Blue', 'Yellow']
				},
				Colors_2: {
					colors: ['Purple', 'Magenta', 'Orange']
				}
			}
		}

		const {html, head, css} = Page.render({serverData: data});

		const components = ['Colors', 'Now'];

		const pageHtml = `
			<html>
				<head>
					${head}
					<style>
						${css.code}
					</style>
				</head>
				<body>
					${html}
					<script>
						const HYDRATION_DATA = ${JSON.stringify(data.hydration)};
						let totalLoadedScripts = 0;

						function hydrate () {

							totalLoadedScripts ++;

							if (totalLoadedScripts < ${components.length}) return;

							const components = {${components.map(component => `${component}:${component}`).join()}};

							const elements = document.getElementsByClassName('Hydrate-me');

							for (let element of elements) {
								const component = element.getAttribute('data-component');
								const instanceId = element.getAttribute('data-instance-id');

								new (components[component])({
									target: element,
									hydrate: true,
									props: HYDRATION_DATA[instanceId]
								});
							}
						}
					</script>
					${components.map(component => `<script defer onload="hydrate()" src="${component}.js"></script>`).join('')}
				</body>
			</html>
		`;

		reply.header('Content-Type', 'text/html');
		reply.send(pageHtml);
	}
});

fastify.listen(process.env.PORT || '8888', '0.0.0.0', function (err, address) {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	fastify.log.info(`server listening on ${address}`)
});