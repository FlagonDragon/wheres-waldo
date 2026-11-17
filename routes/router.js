import Router from 'express';
import controller from '../controllers/controller.js';

const router = Router();

router.get("/", controller.homeGet);

router.get("/picture", controller.pictureGet);
router.post("/picture", controller.picturePost);

router.get("/picture/:pictureId", controller.pictureIdGet);
router.post("/target", controller.targetPost);

router.post("/check-option", controller.checkOptionPost);

router.get("/highscore", controller.highscoreGet);
router.post("/highscore", controller.highscorePost);


export {
    router
};