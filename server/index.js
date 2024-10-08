import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/health",(req,res)=>{
    res.json({
        success : true,
        message : "server is running ",
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});