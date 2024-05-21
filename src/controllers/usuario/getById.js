import usuarioModel from "../../models/usuarioModel.js"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const usuario = await usuarioModel.getById(+id)
        res.json({
            success: `Usuário ${id} encontrado com sucesso!`,
            usuario
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById