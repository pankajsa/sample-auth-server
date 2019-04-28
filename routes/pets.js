
const pets = [
    { id: '1', name: 'Pet1', age: 2 },
    { id: '2', name: 'Pet2', age: 48  },
  ];
  


const getPets = (req, res, next) => {
    res.send(pets);
    return next();  
}


const getPet = (req, res, next) => {
    console.log(req.params.id);

    for (let i = 0, len = pets.length; i < len; i++) {
        if (pets[i].id === req.params.id){
            res.send(pets[i]);
            return next();  
        } 
    }

    res.send(404, 
        {
            "code": "ResourceNotFound",
            "message": "pet/" + req.params.id + " does not exist"
        })
    return next();  
}


const addPet = (req, res, next) => {
    console.log(req.body)
    console.log("Before", pets)
    pets.push(req.body);
    console.log("Before", pets)
    res.send("Done");
    return next();  
}

module.exports = {
    getPets,
    getPet,
    addPet
}