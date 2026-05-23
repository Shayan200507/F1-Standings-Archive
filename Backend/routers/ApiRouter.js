import express from "express"
import {getRace} from "../controllers/GetRace.js"
import {getYear} from "../controllers/GetYear.js"
import {getData} from "../controllers/GetData.js"


export const apiRouter = express.Router()


apiRouter.get("/",getData)
apiRouter.get("/year",getYear)
apiRouter.get("/Race",getRace)



