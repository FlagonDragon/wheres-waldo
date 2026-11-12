import db from '../db/queries.js';

function homeGet(req, res) {

    res.send('Homepage');

};

async function picturePost(req, res) {

  const { title, height, width } = req.body;

  try {

    await db.createPicture(title, height, width);

    res.status(200).json({ message: "Picture created succesfully!" });

  } catch(error) {

    return res.status(500).json({ error });

  }

};

async function pictureGet(req, res) {

    const pictures = await db.getPictures();

    console.log(pictures);

    return res.send(pictures);

}

async function pictureIdGet(req, res) {

  const { pictureId } = req.params;

  const targets = await db.getTargets(pictureId);

  return res.send(targets);

}

async function targetPost(req, res) {

  const { name, coordX, coordY, pictureId } = req.body;

  try {

    await db.createTarget(name, coordX, coordY, pictureId);    

    res.status(200).json({ message: "Target created succesfully!" });

  } catch(error) {

    return res.status(500).send(error);

  }

};

export default {
    pictureGet,
    picturePost,
    pictureIdGet,
    targetPost
}