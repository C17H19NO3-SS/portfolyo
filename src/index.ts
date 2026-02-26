import { Elysia } from "elysia";
import index from "./index.html";
import chalk from "chalk";

new Elysia({
  serve: {
    routes: {
      "/*": index,
    },
  },
}).listen(3000, (sv) => {
  console.log(chalk.green(`Server started on port ${sv.port}!`));
});
