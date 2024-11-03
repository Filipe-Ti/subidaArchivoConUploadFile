const formController = (req, res) => {
    res.send(
        `
        <h1>Formulario para subir Archivo</h1>
        
        <form action="uploadFile" method="post" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button>Subir Archivo</button>

        </form>`
    );
}

const uploadFile = (req, res) => {
    const { file } = req.files;
    const { name } = file;
    console.log(name);
    file.mv(`./doc/${name}`, (err) => {
        if (err) return res.status(500).send({ message: err });
        return res.status(200).send({ message: "Archivo cargado con éxito" });
    });
}

module.exports = {
    formController,
    uploadFile
}
