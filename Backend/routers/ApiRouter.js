import express, { json } from "express"
import {getRaces} from "../controllers/GetRaces.js"
import {getYears} from "../controllers/GetYears.js"
import {getDriverStandings} from "../controllers/GetDriverStandings.js"


export const apiRouter = express.Router()


apiRouter.get("/",(req,res)=>{res.json("invalid endpoint")})
apiRouter.get("/years",getYears)
apiRouter.get("/Races",getRaces)
apiRouter.get("/getDriverStanding/:year/:round",getDriverStandings)



