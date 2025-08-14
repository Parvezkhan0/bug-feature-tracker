const {Project} = require('../../models');
const {TEXTS,STATUS_CODE} = require("../../config/constant")
const asyncErrorHandler = require('../../utils/asyncErrorHandler');

const create = asyncErrorHandler(async(req , res)=>{
    const project = await Project.create(req.body);
    
    return res.status(STATUS_CODE.CREATED).json({
        message:TEXTS.CREATED,
        project
    })
});


const getAll = asyncErrorHandler(async(req,res)=>{
    const project = await Project.findAll();
    if(project.length === 0){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:TEXTS.NOT_FOUND
        })
    }

    return res.status(STATUS_CODE.SUCCESS).json({
        project
    })
})

const getById = asyncErrorHandler(async(req,res)=>{
    const id = req.params.id
    const project = await Project.findOne({where:{id}});
    if(!project){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:TEXTS.NOT_FOUND
        })
    }

    return res.status(STATUS_CODE.SUCCESS).json({
        project
    })
});

const updateProject = asyncErrorHandler(async(req,res)=>{
    const project = await Project.findByPk(req.params.id);
    if(!project){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:TEXTS.NOT_FOUND
        })
    }

    await project.update(req.body);

    const updatedProject = await project.save()


    return res.status(STATUS_CODE.SUCCESS).json({
        message:"Project updated successfylly",
        updatedProject
    })
});

const remove= asyncErrorHandler(async(req,res)=>{
    const project = await Project.findByPk(req.params.id);

    if(!project){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:TEXTS.NOT_FOUND
        })
    }

    await project.destroy();

    return res.status(STATUS_CODE.SUCCESS).json({
        message:"Project Delete Successfylly"
    })
})

module.exports = {create,getAll,getById,updateProject,remove}