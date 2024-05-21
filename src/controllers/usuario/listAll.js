import usuarioModel from "../../models/usuarioModel.js"

const listAll = async (req, res) => {
    try{
        const usuarios = await usuarioModel.getAll()
        return res.json({
            success: 'Usuários listados com sucesso!',
            usuarios
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll