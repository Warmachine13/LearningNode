import http from "http";
import router from "./src/routes/index.mjs";

http.createServer((req,res) => {
    router(req,res)
})
.listen(process.env.PORT || 3000 ,() => console.log(`server is running ${process.env.PORT || 3000}`))