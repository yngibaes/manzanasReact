import express from 'express'
import db from './db.js';

const router = express.Router();

router.post("/manzanas/crear", function(req, res){
    const sql = "INSERT INTO manzanas (nom_manzanas, locali_manzanas, dir_manzanas) VALUES (?)"
    const values =[
        req.body.nom_manzanas,
        req.body.locali_manzanas,
        req.body.dir_manzanas
    ]
    db.query(sql, [values], (err, result)=>{
        if(err) 
        return res.json(err);
        return res.json(result)
    })
});
export default router;