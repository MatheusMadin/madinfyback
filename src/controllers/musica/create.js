const create = (req, res) => {
    const musica = req.body
    res.json({message: 'Esta é a rota POST /musica/', musica})
}

export default create