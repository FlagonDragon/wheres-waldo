import db from '../db/queries.js';

function homeGet(req, res) {

    res.send('Homepage');

};

async function pictureGet(req, res) {

    const pictures = await db.getPictures();

    console.log(pictures);

    return res.send(pictures);

}

async function picturePost(req, res) {

  const { title, width, height  } = req.body;

  try {

    await db.createPicture(title, width, height);

    res.status(200).json({ message: "Picture created succesfully!" });

  } catch(error) {

    return res.status(500).json({ error });

  }

};

async function pictureIdGet(req, res) {

  const { pictureId } = req.params;

  const targets = await db.getTargets(pictureId);

  return res.send(targets);

}

async function targetPost(req, res) {

  const { name, coordX1, coordX2, coordY1, coordY2, pictureId } = req.body;

  console.log(req.body);

  try {

    await db.createTarget(name, coordX1, coordX2, coordY1, coordY2, pictureId);    

    res.status(200).json({ message: "Target created succesfully!" });

  } catch(error) {

    return res.status(500).send(error);

  }

};

async function checkOptionPost(req, res) {

  const { pictureTitle, targetName, coordX, coordY } = req.body;
  
  // console.log(req.body);

  try {

    const target = await db.getTarget(pictureTitle, targetName);

    // console.log('coordX: '+coordX);
    // console.log('Target coordX1: '+target[0].coordX1);
    // console.log('Target coordX2: '+target[0].coordX2);
    // console.log(coordX >= target[0].coordX1 );
    // console.log(coordX <= target[0].coordX2);

    if (
      coordX >= target[0].coordX1 
      && coordX <= target[0].coordX2
      && coordY >= target[0].coordY1 
      && coordY <= target[0].coordY2
    ) {
      return res.json({ message: "Right on the mark!" }); 
    } else {
      return res.json({ message: "A swing and a miss!" });
    }

  } catch(error) {

    return res.status(500).send(error);

  }

};

export default {
    homeGet,
    pictureGet,
    picturePost,
    pictureIdGet,
    targetPost,
    checkOptionPost
}