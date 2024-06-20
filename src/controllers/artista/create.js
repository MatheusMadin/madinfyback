import artistaModel from '../../models/artistaModel.js';
import zodErrorFormat from '../../helpers/zodErrorFormat.js';
//hi
const create = async (req, res) => {
    try {
        const artista = req.body;
        const result = artistaModel.validateArtistaToCreate(artista); // Corrigindo o nome do método
        if (!result.success) {
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            });
        }
        const newArtista = await artistaModel.create(artista);
        return res.json({
            success: `Artista ${newArtista.id} criado com sucesso!`,
            artista: newArtista
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Oops! Ocorreu um erro no servidor, tente novamente!'
        });
    }
};

export default create;