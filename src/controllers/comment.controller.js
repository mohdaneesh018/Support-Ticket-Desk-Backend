import {
    createCommentService,
    getCommentsByTicketService,
} from "../services/comment.service.js";

export const addComment = async (req, res, next) => {
    try {
        const comment = await createCommentService({
            ticket: req.params.id,
            comment: req.body.comment,
            created_by: req.user._id,
        });

        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
};

export const getComments = async (req, res, next) => {
    try {
        const comments = await getCommentsByTicketService(req.params.id);
        res.json(comments);
    } catch (error) {
        next(error);
    }
};