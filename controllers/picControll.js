const fs = require("fs");
const Picture = require("../models/Picture");

exports.create = async (req, res) => {
  try {
    
    const name = req.body;
    const file = req.file;
    
    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();
    res.json(picture);
  } catch (err) {
    res.status(500).json({ message: "Imagem salva" });
  }
};


