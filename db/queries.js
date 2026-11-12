import { prisma } from "../lib/prisma.js";

async function getPictures() {

  const pictures = await prisma.picture.findMany();

  return pictures;
  
}

async function createPicture(title, height, width) {

  const picture = await prisma.picture.create({
    data: {
      title: title,
      height: height,
      width: width,
    },
  });

  console.log("Created picture:", picture);
  
}

async function getTargets(pictureId) {

  const targets = await prisma.target.findMany({
    where: { pictureId: Number(pictureId) },
  });

  return targets;
  
}

async function createTarget(name, coordX, coordY, pictureId) {

  const target = await prisma.target.create({
    data: {
      name: name,
      coordX: coordX,
      coordY: coordY,
      pictureId: Number(pictureId),
    },
  });

  console.log("Created target:", target);
  
}

export default {
    getPictures,
    createPicture,
    getTargets,
    createTarget,
}