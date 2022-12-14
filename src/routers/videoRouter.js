import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
import { protectorMiddleware, videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .all(protectorMiddleware)
  .get("/:id([0-9a-f]{24})/delete", deleteVideo);
videoRouter
  .all(protectorMiddleware)
  .route("/:id([0-9a-f]{24})/edit")
  .get(getEdit)
  .post(postEdit);

export default videoRouter;
