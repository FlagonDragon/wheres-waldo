import { prisma } from "../lib/prisma.js";

async function getPictures() {

  const pictures = await prisma.picture.findMany();

  return pictures;
  
}

async function createPicture(title, width, height ) {

  const picture = await prisma.picture.create({
    data: {
      title: title,
      width: Number(width),
      height: Number(height),
    },
  });

  console.log("Created picture:", picture);
  
}

async function getTarget(pictureTitle, targetName) {

  const picture = await prisma.picture.findUnique({
    where: { title: pictureTitle },
  });

  console.log('Picture is: ', picture);

  console.log(targetName);
  console.log(picture.id);
  
  const target = await prisma.target.findMany({
    where: { 
      name: targetName,
      pictureId: picture.id,  
    },
  });

  console.log('Target is: ', target);

  return target;
  
}

async function getTargets(pictureId) {

  const targets = await prisma.target.findMany({
    where: { pictureId: Number(pictureId) },
  });

  return targets;
  
}

async function createTarget(name, coordX1, coordX2, coordY1, coordY2, pictureId) {

  console.log(arguments);
  
  const target = await prisma.target.create({
    data: {
      name: name,
      coordX1: Number(coordX1),
      coordX2: Number(coordX2),
      coordY1: Number(coordY1),
      coordY2: Number(coordY2),
      pictureId: Number(pictureId),
    },
  });

  console.log("Created target:", target);
  
}

export default {
    getPictures,
    createPicture,
    getTarget,
    getTargets,
    createTarget,
}