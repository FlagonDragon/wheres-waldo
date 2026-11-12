import db from '../db/queries.js';

function homeGet(req, res) {

    res.send('Homepage');

};

async function picturePost(req, res) {

  const { title, width, height  } = req.body;

  try {

    await db.createPicture(title, width, height);

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

  const { name, coordX1, coordX2, coordY1, coordY2, pictureId } = req.body;

  try {

    await db.createTarget(name, coordX1, coordX2, coordY1, coordY2, pictureId);    

    res.status(200).json({ message: "Target created succesfully!" });

  } catch(error) {

    return res.status(500).send(error);

  }

};

export default {
    homeGet,
    pictureGet,
    picturePost,
    pictureIdGet,
    targetPost
}