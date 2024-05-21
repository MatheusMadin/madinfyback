import artistaModel from "../../models/artistaModel.js"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const artista = await artistaModel.getById(+id)
        res.json({
            success: `Artista ${id} encontrado com sucesso!`,
            artista
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById