const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const http = require("http");
const server = http.createServer(app);
const path = require("path");
// const logger = require("./config/logger");

//---------------Connect Database----------------//
connectDB();
// --------------------------middleware routing body parse------------------------------
app.use(express.json());
//---------------Routes----------------//
app.use("/customer", require("./routes/customerRoutes"));
app.use("/influencer", require("./routes/influencerRoutes"));
app.use("/interest", require("./routes/interestRoutes"));
app.use("/admin", require("./routes/adminRoutes"));
app.use("/company", require("./routes/companyRoutes"));
app.use("/brand", require("./routes/brandRoutes"));
app.use("/campaign", require("./routes/campaignRoutes"));
app.use("/collaboration", require("./routes/collaborationRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "../", "uploads")));

server.listen(port, (error) => {
  error ? console.log(error) : console.log(`Server running on port ${port}`);
});
