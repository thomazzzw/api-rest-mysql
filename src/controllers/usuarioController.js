import {
    criarUsuario,
    listarUsuarios,
    atualizarUsuario,
    deletarUsuario
} from "../models/usuarioModel";

export async function criar(req, res) {
    try {
        const { nome, email } = req.body;

        const usuario = await criarUsuario(nome, email);

        res.status(201).json(usuario);

    } catch (e) {
        res.status(500).json({ erro: "Erro ao criar usuario" });
    }
}

export async function listar(req, res) {
    try {
        const usuarios = await listarUsuarios();

        res.json(usuarios);

    } catch (e) {
        res.status(500).json({ erro: "Erro ao listar usuarios" });
    }
}

export async function atualizar(req, res) {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;

        const result = await atualizarUsuario(id, nome, email);

        if (!result.affectedRows) {
            return res.status(404).json({ erro: "Nenhum usuario encontrado" });
        }

        res.json({ mensagem: "Usuario atualizado" });

    } catch (e) {
        res.status(500).json({ erro: "Erro ao atualizar usuario" });
    }
}

export async function deletarUsuario(id) {
    try {
        const { id } = req.params;

        const result = await deletarUsuario(id);
        if (!result.affectedRows) {
            return res.status(404).json({ erro: "Usuario não encontrado" });
        }

        res.json({ mensagem: "Deletado com sucesso" });

    } catch (e) {
        res.status(500).json({ erro: "Erro ao deletar usuario" });
    }
}