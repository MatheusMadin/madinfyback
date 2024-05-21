import artistaModel from "../../models/artistaModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await artistaModel.remove(+id)
        res.json({
            success: `Artista ${id} apagado com sucesso!`,
            artista: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove