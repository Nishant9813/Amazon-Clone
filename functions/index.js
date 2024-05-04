const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { logger } = require("firebase-functions");

const stripe = require("stripe")("sk_test_51PC1vXSE5sOS3vsWBAoozvxmc6kZxTuZUNpPlj2BXSErNC6fKs2Tyi6oo8o7tm7wRAUn0Zh5c2e5kweFftFvdQNJ00ISgC6Hl8");

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;
  
    // console.log("Payment Request Received BOOM!!! for this amount >>> ", total);
  
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency (in cents)
        currency: "usd",
      });
  
      // OK - Created
      response.status(201).send({
        clientScreat: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      response.status(500).send({ error: "Unable to create payment intent" });
    }
  });
  

// - Listen command
exports.api = functions.https.onRequest(app);
