const express = require("express");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail.js");
require("dotenv").config();

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    methods: ["POST"],
  })
);

app.use(router);

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all credentials",
    });
  }
  
  try {
    await sendEmail({
      email: process.env.MAIL_ADDRESS,
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message sent successfully!!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on the PORT => ${process.env.PORT}`);
});
