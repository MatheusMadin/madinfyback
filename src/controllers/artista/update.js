import artistaModel from "../../models/artistaModel.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const artista = req.body
        const result = await artistaModel.edit({id, ...artista})
        res.json({
            success: `Artista ${id} editado com sucesso!`,
            artista: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update