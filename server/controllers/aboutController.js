import { createAbout, getAbout  } from "../models/aboutModel.js";

 
 
export const createAboutSec = async (req, res) => {
    const {title, description, skills} = req.body;
 try{
        const aboutDb = await createAbout({title, description, skills});
        return res.send({
            status:201,
            message:"About created successfully",
            data:aboutDb
        });
     }catch(error){
        return res.send({
            status:500,
            message:"Internal server error",
            error:error,
        });
     }
};


export const getAboutSec = async (req, res) => {
    try {
        const aboutDb = await getAbout();
        return res.send({
            status:200,
            message:"About fetched successfully",
            data:aboutDb
        });
    } catch (error) {
        return res.send({
            status:500,
            message:"Internal server error",
            error:error,
        });
    }
};
