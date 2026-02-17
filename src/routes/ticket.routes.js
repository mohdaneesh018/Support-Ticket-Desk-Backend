import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js"; 
import {
    createTicket,
    getTicketById,
    getTickets,
    updateTicket,
} from "../controllers/ticket.controller.js";
import { getTicketByIdService } from "../services/ticket.service.js"; 


const router = express.Router();

router.post("/", authMiddleware, createTicket);
router.get("/", authMiddleware, getTickets);
router.get("/:id", authMiddleware, getTicketById);
router.patch("/:id", authMiddleware, updateTicket);

router.get("/:id", authMiddleware, getTicketByIdService); 

export default router;