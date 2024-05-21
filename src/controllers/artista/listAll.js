import artistaModel from "../../models/artistaModel.js"

const listAll = async (req, res) => {
    try{
        const artistas = await artistaModel.getAll()
        return res.json({
            success: 'Artistas listados com sucesso!',
            artistas
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll