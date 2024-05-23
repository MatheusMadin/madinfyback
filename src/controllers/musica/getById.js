import musicaModel from "../../models/musicaModel.js"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const musica = await musicaModel.getById(+id)
        res.json({
            success: `Musica ${id} encontrado com sucesso!`,
            musica
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById