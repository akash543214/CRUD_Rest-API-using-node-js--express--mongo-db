import { User } from "../models/Users.model.js"

const getUsers = async(req,res)=>{

    try
    {
      const users =  await User.find()
           res.json(users)
          
          }
           catch(err)
           {
            res.status(500).json({ error: 'Internal Server Error' });
           }
}

const createUsers = async(req,res)=>{
    const {name,email,password } =  req.body
    try
   { 
    const user = await User.create({
        name: name,
        email: email,
        password: password
    })

    res.status(201).json(user);

}
  catch(err)
           {
            res.status(500).json({ error: 'Internal Server Error' });

           }
}

const updateUsers = async(req,res)=>{

    const {name,email,password } =  req.body

    try{
    const user = await User.updateOne(
      { _id: req.query.id }, 
      {
        $set: {
          name: name,
          email: email,
          password: password
        },
      }
      
    );
     
    res.status(201).json(user);
  }
    catch(err)
    {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteUsers = async(req,res)=>{

    try{
        const user =  await User.deleteOne({ _id: req.query.id });
       
        res.status(201).json(user);
       }
       catch(err)
       {
         res.status(500).json({ error: 'Internal Server Error' });
       }
}

export {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}