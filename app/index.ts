"use strict";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { mealsRouter } from "./Models/ingredients.router";
import { searchRouter } from "./Models/search.router";
dotenv.config();

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/", searchRouter)
app.use("/", mealsRouter)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});