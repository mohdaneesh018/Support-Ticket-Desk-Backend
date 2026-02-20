import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
app.use(
    cors({
        origin: "https://support-ticket-desk-frontend.vercel.app/",
        credentials: true,
    })
);

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/tickets", commentRoutes);

app.use(errorHandler);

export default app;