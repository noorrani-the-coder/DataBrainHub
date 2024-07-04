import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import Userrotutes from './routes/Userroutes.js'
import Authroute from './routes/authroute.js'
import SequelizeStore from 'connect-session-sequelize';
import db from "./config/database.js";
import './controllers/PdfDetails.js'
import { Server } from "socket.io";
import http from "http";


dotenv.config();

const app = express();

//(async() =>{
   //await db.sync();
//}) ();

const mongourl = "mongodb+srv://noorani232004:5vj0vCSBiVhqgPyF@cluster.2btnttn.mongodb.net/";

mongoose.connect(mongourl)   
.then(()=> {
    console.log("connected to database");
})
.catch((e) => console.log(e));

const storage = multer.diskStorage({
    destination : function(req,files,cb){
        cb(null,'./files');
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const storage1 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images');
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now();
        const ext = file.originalname.split('.').pop(); // Get file extension
        cb(null, `${uniqueSuffix}.${ext}`);
    },
});



const upload = multer({storage: storage});

const pdfSchema = mongoose.model("PdfDetails");


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema1 = mongoose.model("PdfDetails1");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema2 = mongoose.model("PdfDetails2");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema3 = mongoose.model("PdfDetails3");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema4 = mongoose.model("PdfDetails4");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema5 = mongoose.model("PdfDetails5");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema6 = mongoose.model("PdfDetails6");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema7 = mongoose.model("PdfDetails7");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const pdfSchema8 = mongoose.model("PdfDetails8");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use("/files", express.static("files"));
app.use("/images", express.static("files"));

app.post("/upload", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-1", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema1.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-2", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema2.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-3", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema3.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-4", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema4.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-5", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema5.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-6", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema6.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-7", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema7.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.post("/upload-8", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await pdfSchema8.create({title: title, pdf: filename});
        res.send({ status: "ok"});
    } catch (error) {
        res.json({status: error});
    }
});

app.get("/get-files", async (req, res) => {
    try {
        pdfSchema.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files1", async (req, res) => {
    try {
        pdfSchema1.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files2", async (req, res) => {
    try {
        pdfSchema2.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files3", async (req, res) => {
    try {
        pdfSchema3.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files4", async (req, res) => {
    try {
        pdfSchema4.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files5", async (req, res) => {
    try {
        pdfSchema5.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files6", async (req, res) => {
    try {
        pdfSchema6.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files7", async (req, res) => {
    try {
        pdfSchema7.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.get("/get-files8", async (req, res) => {
    try {
        pdfSchema8.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.delete("/delete/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete1/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema1.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete2/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema2.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete3/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema3.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete4/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema4.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete6/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema5.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete7/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema6.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete8/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema7.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete9/:id", async (req, res) => {
    const pdfId = req.params.id;
    try {
        await pdfSchema8.findByIdAndDelete(pdfId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

const imageSchema = mongoose.model("ImageDetails");

app.post("/upload-image", upload.single("file"), async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    try {
        await imageSchema.create({ title: title, image: filename });
        res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }
});

app.get("/get-images", async (req, res) => {
    try {
        imageSchema.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        // Handle error
    }
});

app.delete("/delete5/:id", async (req, res) => {
    const imageId = req.params.id;
    try {
        await imageSchema.findByIdAndDelete(imageId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    //store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(express.json ());
app.use(Userrotutes);
app.use(Authroute);

const server = http.createServer(app); // Create HTTP server

const io = new Server(server, { // Initialize socket.io with the server
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.get('/',(req,res) => {
    res.json("Api is working ");
})

const messageSchema = new mongoose.Schema({
    message: String,
    user: String,
    time: String
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

app.get("/get-messages", async (req, res) => {
    try {
        const messages = await Message.find({});
        res.send({ status: "ok", data: messages });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.delete("/delete-message/:id", async (req, res) => {
    const messageId = req.params.id;
    try {
        await Message.findByIdAndDelete(messageId);
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("send-message", async (messageData) => {
        try {
            // Create a new message document
            const message = new Message({
                message: messageData.message,
                user: messageData.user,
                time: messageData.time
            });
            // Save the message to the database
            await message.save();
            // Broadcast the message to all connected clients
            io.emit("received-message", messageData);
        } catch (error) {
            console.error("Error saving message:", error);
        }
    });

    socket.on("logout", () => {
        // Emit logout event to all connected clients
        io.emit("user-logout", socket.id);
        console.log(`User disconnected: ${socket.id}`);
    });

    socket.on("disconnect", () => {
        // Emit logout event to all connected clients
        io.emit("user-logout", socket.id);
        console.log(`User disconnected: ${socket.id}`);
    });
});

app.get("/", async (req, res) => {
    res.send("success!!!");
});

server.listen(5000, () => {
  console.log('Socket server running on port 5000');
});

//app.listen(process.env.APP_PORT, () => {
    //console.log('server up and running...');
//});









