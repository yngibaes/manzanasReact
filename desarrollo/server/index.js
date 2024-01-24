/* import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    localhost: 'localhost',
    user: 'root',
    password: "",
    database: "manzanascuidado"
})
*/


import express from 'express'
import cors from 'cors'
import db from './db.js'

const app = express();
app.use(cors());
app.use(express.json())

app.listen(4000, () => {
    console.log("Estamos en el puerto 4000")
})

/* app.post('/registrarse/ola', (req, res)=>{
    const values = [
        req.body.idDoc_mujer,
        req.body.tpDoc_mujer,
        req.body.nom_mujer,
        req.body.apell_mujer,
        req.body.tel_mujer,
        req.body.email_mujer,
        req.body.passw_mujer,
        req.body.ciu_mujer,
        req.body.dir_mujer,
        req.body.ocu_mujer]
    
/*     const con = `SELECT idDoc_mujer from mujeres where idDoc_mujer = ?`
    db.query(con, [values[0]], (err, result)=>{
        if (err) {
            return res.json(err);
        }
        if(result.length > 0) {
            res.json({ error: 'El ID ya existe'});
        }
    const sql = "INSERT INTO mujeres (idDoc_mujer, tpDoc_mujer, nom_mujer, apell_mujer, tel_mujer, email_mujer, passw_mujer, ciu_mujer, dir_mujer, ocu_mujer) VALUES (?)";
        db.query(sql, [values], (err, result) =>{
            if(err){
                res.json(err); 
                
            }res.json(result)
    })
}) */

//Iniciar sesión
app.post("/iniciarsesion",(req,res)=>{
    const sql = "Select idDoc_mujer, passw_mujer from mujeres WHERE idDoc_mujer = ?"
    const idDoc_mujer = req.body.idDoc_mujer
    db.query(sql, [idDoc_mujer], (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result)
    })
})

//Manzanas
app.get("/admin/manzanas", (req, res) => {
    const sql = "Select * from manzanas"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.post("/admin/manzanas/crear", function (req, res) {
    const sql = "INSERT INTO manzanas (nom_manzanas, locali_manzanas, dir_manzanas, nom_municipios) VALUES (?)"
    const values = [
        req.body.nom_manzanas,
        req.body.locali_manzanas,
        req.body.dir_manzanas,
        req.body.nom_municipios,
    ]
    db.query(sql, [values], (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result)
    })
})

app.get("/admin/manzanas/leer/:id_manzanas", (req, res) => {
    const sql = "Select * FROM manzanas WHERE id_manzanas = ?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [id_manzanas], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.put("/admin/manzanas/editar/:id_manzanas", (req, res) => {
    const sql = "UPDATE manzanas SET nom_manzanas=?, locali_manzanas=?, dir_manzanas=?, nom_municipios=? WHERE id_manzanas=?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [req.body.nom_manzanas, req.body.locali_manzanas, req.body.dir_manzanas, req.body.nom_municipios, id_manzanas], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.delete("/admin/manzanas/eliminar/:id_manzanas", (req, res) => {
    const sql = "DELETE from manzanas WHERE id_manzanas=?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [id_manzanas], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})


//Establecimiento
app.get("/admin/establecimiento", (req, res) => {
    const sql = "Select * from establecimiento"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.post("/admin/establecimiento/crear", function (req, res) {
    const sql = "INSERT INTO establecimiento (nom_establecimiento, admin_establecimiento, dir_establecimiento, fk_servicios) VALUES (?,?,?,(SELECT id_servicios FROM servicios WHERE id_servicios = ?))"
    const nom_establecimiento = req.body.nom_establecimiento
    const admin_establecimiento = req.body.admin_establecimiento
    const dir_establecimiento = req.body.dir_establecimiento
    const id_servicios = req.body.id_servicios
        
    db.query(sql, [nom_establecimiento, admin_establecimiento, dir_establecimiento, id_servicios], (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result)
    })
})

app.get("/admin/establecimiento/leer/:id_establecimiento", (req, res) => {
    const sql = "Select * FROM establecimiento WHERE id_establecimiento = ?"
    const id_establecimiento = req.params.id_establecimiento
    db.query(sql, [id_establecimiento], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.put("/admin/establecimiento/editar/:id_establecimiento", (req, res) => {
    const sql = "UPDATE establecimiento SET nom_establecimiento=?, admin_establecimiento=?, dir_establecimiento=?, fk_servicios=(SELECT id_servicios FROM servicios WHERE id_servicios = ?) WHERE id_establecimiento=?"
    const id_establecimiento = req.params.id_establecimiento
    db.query(sql, [req.body.nom_establecimiento, req.body.admin_establecimiento, req.body.dir_establecimiento, req.body.id_servicios, id_establecimiento], (err, result) => {
        if (err) return res.json({ Message:"Error"})
        return res.json(result)
    })
})

app.delete("/admin/establecimiento/eliminar/:id_establecimiento", (req, res) => {
    const sql = "DELETE from establecimiento WHERE id_establecimiento=?"
    const id_establecimiento = req.params.id_establecimiento
    db.query(sql, [id_establecimiento], (err, result) => {
        if (err) return res.json({ Message: "Error"})
        return res.json(result)
    })
})

//Servicios
app.get("/admin/servicios", (req, res) => {
    const sql = "Select * from servicios"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.post("/admin/servicios/crear", function (req, res) {
    const sql = "INSERT INTO servicios (nom_servicios, descri_servicios, tipo_servicios, cate_servicios) VALUES (?)"
    const values = [
        req.body.nom_servicios,
        req.body.descri_servicios,
        req.body.tipo_servicios,
        req.body.cate_servicios
    ]
    db.query(sql, [values], (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result)
    })
})

app.get("/admin/servicios/leer/:id_servicios", (req, res) => {
    const sql = "Select * FROM servicios WHERE id_servicios = ?"
    const id_servicios = req.params.id_servicios
    db.query(sql, [id_servicios], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.put("/admin/servicios/editar/:id_servicios", (req, res) => {
    const sql = "UPDATE manzanas SET nom_servicios=?, descri_servicios=?, tipo_servicios=?, cate_servicios=? WHERE id_servicios=?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [req.body.nom_servicios, req.body.descri_servicios, req.body.tipo_servicios, req.body.cate_servicios, id_manzanas], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.delete("/admin/servicios/eliminar/:id_servicios", (req, res) => {
/*     const sql1 = db.query("SELECT fk_tabla, fk_columna, fk_valor FROM fk_servicios WHERE fk_tabla != 'servicios';"); */

    const sql = "DELETE from servicios WHERE id_servicios=?"
    const id_servicios = req.params.id_servicios
    db.query(sql, [id_servicios], (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

//Propuesta
app.delete("/admin/servicios/eliminar/:id_servicios", (req, res) => {
        const sql = "DELETE from servicios WHERE fk_manzanas=?"
        const fk_manzanas = req.params.id_servicios
        db.query(sql, [fk_manzanas], (err, result) => {
            if (err) return res.json({ Message: "Error" })
            return res.json(result)
        })
    })

app.get("/mujeres", (req, res) => {
    const sql = "Select * from mujeres"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

app.get("/admin/propuestas", (req, res) => {
    const sql = "Select * from manzanas_servicios"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error" })
        return res.json(result)
    })
})

//Reportes
/* app.get('/admin/reportes', (req, res) => {
    // Ejecuta una consulta SQL
    const sql = db.query('SELECT * FROM manzanas');
    // Convierte los datos a formato JSON
    const data = JSON.stringify(sql.rows);
    // Devuelve los datos al cliente
    res.json(data);
}); */
/* app.get('/admin/reportes/pdf', (req, res) => {
    // Ejecuta una consulta SQL
    const sql = connection.query('SELECT * FROM manzanas');
    // Convierte los datos a formato PDF
    const fileContent = xlsx.toBuffer(sql.rows);
    // Devuelve los datos al cliente
    res.download('reporteManzanas.pdf', fileContent);
});*/