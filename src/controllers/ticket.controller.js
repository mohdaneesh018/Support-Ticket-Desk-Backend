import Ticket from "../models/ticket.model.js";
import { isValidStatusTransition } from "../utils/statusFlow.js";
import {
    createTicketService,
    getTicketByIdService,
    updateTicketService,
} from "../services/ticket.service.js";

export const createTicket = async (req, res, next) => {
    try {
        const ticket = await createTicketService({
            ...req.body,
            created_by: req.user._id,
        });

        res.status(201).json(ticket);
    } catch (error) {
        next(error);
    }
};

export const getTickets = async (req, res, next) => {
    try {
        const { page = 1, search, status } = req.query;

        const query = {};

        if (req.user.role === "user") {
            query.created_by = req.user._id;
        }

        if (status) query.status = status;

        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        let tickets;

        if (req.user.role === "admin") {
            tickets = await Ticket.find(query).sort({ createdAt: -1 });
        } else {
            tickets = await Ticket.find(query)
                .sort({ createdAt: -1 })
                .limit(5);
        }

        res.json(tickets);

    } catch (error) {
        next(error);
    }
};

export const updateTicket = async (req, res, next) => {
    try {
        const ticket = await getTicketByIdService(req.params.id);

        if (!ticket)
            return res.status(404).json({ message: "Ticket not found" });

        if (req.body.status) {
            const valid = isValidStatusTransition(
                ticket.status,
                req.body.status
            );

            if (!valid)
                return res
                    .status(400)
                    .json({ message: "Invalid status transition" });

            ticket.status = req.body.status;
        }

        if (req.body.assigned_to) {
            if (req.user.role !== "admin")
                return res
                    .status(403)
                    .json({ message: "Only admin can assign" });

            ticket.assigned_to = req.body.assigned_to;
        }

        await updateTicketService(ticket);

        res.json(ticket);
    } catch (error) {
        next(error);
    }
};

export const getTicketById = async (req, res, next) => {
    try {
        const ticket = await getTicketByIdService(req.params.id);

        if (!ticket)
            return res.status(404).json({ message: "Ticket not found" });

        res.json(ticket);
    } catch (error) {
        next(error);
    }
};