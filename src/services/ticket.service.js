import Ticket from "../models/ticket.model.js";

export const createTicketService = async (data) => {
    return await Ticket.create(data);
};

export const getTicketsService = async (query, page, limit) => {
    return await Ticket.find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(Number(limit));
};

export const getTicketByIdService = async (id) => {
    return await Ticket.findById(id);
};

export const updateTicketService = async (ticket) => {
    return await ticket.save();
};