import musicaModel from '../../models/musicaModel.js'
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try {
        // Extrai os dados da requisição
        const musica = req.body
        
        // Valida os dados da música usando a função validateMusicaToCreate do modelo
        const result = musicaModel.validateMusicaToCreate(musica)
        
        // Se houver erros de validação, retorna um erro 400 com os detalhes
        if (!result.success) {
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
        
        // Cria uma nova instância da música
        const newMusica = await musicaModel.create(musica)
        
        // Retorna a nova música criada
        return res.json({
            success: `Música ${newMusica.id} criada com sucesso!`,
            musica: newMusica
        })
    } catch (error) {
        // Se ocorrer um erro durante o processo, retorna um erro 500
        console.log(error.message)
        return res.status(500).json({
            error: 'Oops! Houve um erro no servidor. Por favor, tente novamente!'
        })
    }
}

export default create