import musicaoModel from "../../models/musicaoModel.js"

const listAll = async (req, res) => {
    try{
        const musicaos = await musicaoModel.getAll()
        return res.json({
            success: 'Musica listados com sucesso!',
            musicaos
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll