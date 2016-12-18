import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";

const app = express();

app.server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.server.listen(process.env.SERVER_PORT, () => {
  console.log(`[App] Launched on http://localhost:${app.server.address().port}`);
});

export default app;
