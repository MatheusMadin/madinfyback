import musicaModel from '../../models/musicaModel.js'
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try {
        const musica = req.body;
        const result = musicaModel.validateMusicaToCreate(musica);
        if (!result.success) {
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            });
        }

        const { name, avatar, artista } = musica;

        const newMusica = await prisma.musica.create({
            data: {
                name,
                avatar,
                artistas: {
                    connect: artista.map(id => ({ id }))
                }
            }
        });

        return res.json({
            success: `Musica ${newMusica.id} criado com sucesso!`,
            musica: newMusica
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        });
    }
}

export default create;