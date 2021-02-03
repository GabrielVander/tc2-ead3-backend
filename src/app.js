import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes";
import usersRouter from "./routes/users";
import {createServer} from "http";
import {port} from "./env";
import cors from "cors";
import {initializeMongoose} from "./repository/connection";

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

initializeMongoose();

app.use('/', indexRouter);
app.use('/users', usersRouter);

const server = createServer(app);

server.listen(port, '0.0.0.0');
server.on('listening', () => {
    console.log('Express src started on port %s at %s', server.address().port, server.address().address);
});
