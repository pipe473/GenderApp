import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("DESDE API/USUARIOS");
});

router.post("/", (req, res) => {
    res.send("DESDE POST API/USUARIOS");
});

export default router;