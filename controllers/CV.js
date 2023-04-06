import CV from "../model/CV.js"

export const createCV = async (req, res) => {
    const newCV = new CV(req.body)
    try{
        const savedCv = await newCV.save()
        res.status(200).json(savedCv)

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const updatedCV = async (req, res) => {
    try{
        const updatedCV = await CV.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedCV);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const deleteCV = async (req, res) => {
    try{
        await CV.findByIdAndDelete(req.params.id)
         res.status(200).json("CV has been deleted.");
     }catch(err){
         res.status(500).json({message: err.message});
     }
}

export const getByIDCV = async (req, res) => {
    try{
        const cv = await CV.findById(req.params.id)
        res.status(200).json(cv);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const getByEmailCV = async (req, res) => {
    try{
        const cv = await CV.findOne({ email: req.params.email })
        res.status(200).json(cv);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


export const getAllCV = async (req, res) => {
    
    try{
        const cvs = await CV.find()
        res.status(200).json(cvs)

    }catch(err){
        res.status(500).json({ message: err.message })
    }
        
}