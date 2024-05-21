import usuarioModel from "../../models/usuarioModel.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const usuario = req.body
        const result = await usuarioModel.edit({id, ...usuario})
        res.json({
            success: `Usuário ${id} editado com sucesso!`,
            usuario: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update