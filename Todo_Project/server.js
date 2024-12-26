// Shree Ganeshay namah 
const express = require('express')
const app = express()
const port = 7000
var arr = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/user', (req, res) => {
    res.json(arr);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    arr.push({ ...req.body, id: arr.length + 1 });
    res.send("Added Your Todo Successfully.....");
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    console.log(id)

    const filterarr = arr.filter((ele)=>{
        return ele.id != id 
    })
    arr = filterarr
    res.json(filterarr)
    res.json("Deleted Your Todo Successfully......") 
});

app.put('/user/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)

    const query = req.query
    console.log(query)
    console.log(req.body)

    const findInd = arr.findIndex((ele)=>{
    if(ele.id == id){
            ele.Todo = req.body.Todo
            return(res.json("Added Your ToDo Sucsessfully....."))
        }
        res.json("Check Get Request")
                
    })

    const find = arr.find((ele)=>{
        return ele.id == id
    })

    console.log(find)
    console.log(findInd)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
