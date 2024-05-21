import usuarioModel from "../../models/usuarioModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await usuarioModel.remove(+id)
        res.json({
            success: `Usuário ${id} apagado com sucesso!`,
            usuario: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove