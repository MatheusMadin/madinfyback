import musicaModel from "../../models/musicaModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await musicaModel.remove(+id)
        res.json({
            success: `Musica ${id} apagado com sucesso!`,
            musica: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove