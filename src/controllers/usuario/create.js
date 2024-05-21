import usuarioModel from '../../models/usuarioModel.js'
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try{
        const usuario = req.body
        const result = usuarioModel.validateUsuarioToCreate(usuario)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
        const newusuario = await usuarioModel.create(usuario)
        return res.json({
            success: `Usuário ${newusuario.id} criado com sucesso!`,
            usuario: newusuario
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
           
        })
    }
}

export default create