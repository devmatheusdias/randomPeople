import express, {json} from "express";
import "express-async-errors";
import dotenv from "dotenv";
import routes from "./routers/index.routes";

const app = express();

dotenv.config();
app.use(json());
app.use(routes);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running or port: ${PORT}`);
})