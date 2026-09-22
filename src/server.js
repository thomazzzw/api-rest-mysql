import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usuarioRoutes from "./usuarioRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/usuarios", usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
