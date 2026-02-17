import Comment from "../models/comment.model.js";

export const createCommentService = async (data) => {
    return await Comment.create(data);
};

export const getCommentsByTicketService = async (ticketId) => {
    return await Comment.find({ ticket: ticketId })
        .populate("created_by", "email")
        .sort({ createdAt: -1 });
};