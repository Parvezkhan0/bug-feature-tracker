const {User,Comment} = require('../../models');
const {TEXTS,STATUS_CODE} = require("../../config/constant");
const asyncErrorHandler = require('../../utils/asyncErrorHandler');


const create = asyncErrorHandler(async(req ,res)=>{
    const userId = req.user.id
    const comment = await Comment.create({
        text:req.body.text,
        ticketId:req.body.ticketId,
        userId:userId
    });
    return res.status(STATUS_CODE.CREATED).json({
        message:TEXTS.CREATED,
        comment
    })

});


const getByTicket = asyncErrorHandler(async(req,res)=>{
    const ticketId = req.params.id 

    const ticketCommints = await Comment.findAll({where:{ticketId},
        include:[
           {
             model:User,
             as:'user',
             attributes:['id','name']
            }

        ]
    });

    if(ticketCommints.length === 0){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:TEXTS.NOT_FOUND
        })
    }


    return res.status(STATUS_CODE.SUCCESS).json({
        ticketCommints
    })
});


const updateComment = asyncErrorHandler(async(req,res)=>{
    const comment = await Comment.findByPk(req.params.id);

    if(!comment || comment.userId !== req.user.id ){
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            message:"You cannot update this comment"
        })
    }

    await comment.update(req.body)
    await comment.save();

    return res.status(STATUS_CODE.SUCCESS).json({
        comment
    })
})


const remove = asyncErrorHandler(async(req , res)=>{
    const comment = await Comment.findByPk(req.params.id);
    
    if(!comment || comment.userId !== req.user.id){
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            message:"Comment not found or you cannot delete This comment"
        })
    }

    await comment.destroy();

    return res.status(STATUS_CODE.SUCCESS).json({
        message:"Comment deleted Successfylly"
    })
})

module.exports = {create,getByTicket,updateComment,remove}