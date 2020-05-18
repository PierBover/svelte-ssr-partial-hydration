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
			Colors: {
				colors: ['Red', 'Blue', 'Yellow']
			}
		}

		const {html, head, css} = Page.render({serverData: data});

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
						const PROPS_Colors = ${JSON.stringify(data.Colors)};

						function hydrate () {
							new Colors({
								target: document.getElementById('Colors'),
								hydrate: true,
								props: PROPS_Colors
							});
						}
					</script>
					<script defer onload="hydrate()" src="Colors.js"></script>
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