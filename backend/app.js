import Fastify from "fastify";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import AutoLoad from "fastify-autoload";

const fastify = Fastify({logger: true});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function(fastify, opts) {
fastify.register(AutoLoad, {
    dir: join(__dirname, "routes")
});

fastify.register(import('./test/route.js'));

// fastify.get("/", async function(request, reply) {
//     return "Hello from fastify!";
// });

fastify.listen(3000, () => {
    console.log("Running on port 3000");
});

}