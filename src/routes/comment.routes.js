import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
    addComment,
    getComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/:id/comments", authMiddleware, addComment);
router.get("/:id/comments", authMiddleware, getComments);

export default router;