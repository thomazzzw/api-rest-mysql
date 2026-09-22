import express from "express";

import {
    criar,
    listar,
    atualizar,
    deletar
} from "./usuarioController.js";

const router = express.Router();

router.post("/", criar);

router.get("/", listar);

router.put("/:id", atualizar);

router.delete("/:id", deletar);

export default router;
