import Fastify from "fastify";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import AutoLoad from "fastify-autoload";
import mongoose from "mongoose";
import fastifySwagger from 'fastify-swagger';
import fastifyCors from 'fastify-cors';

// Import Swagger Options
import swaggerOptions from './config/swagger.js';

// Connect to DB
mongoose.connect('mongodb://localhost/brewtool')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err));

const fastify = Fastify({logger: true});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function(fastify, opts) {
fastify.register(AutoLoad, {
    dir: join(__dirname, "routes")
});

fastify.register(fastifyCors, { 
    // put your options here
  });

// Register Swagger
fastify.register(fastifySwagger, swaggerOptions);

fastify.register(import('./test/route.js'));

// fastify.get("/", async function(request, reply) {
//     return "Hello from fastify!";
// });

fastify.listen(4000, () => {
    fastify.swagger();
    console.log("Running on port 4000");
});

}