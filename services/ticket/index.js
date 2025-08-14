const {Ticket,Project,User} = require("../../models");
const {STATUS_CODE,TEXTS} = require("../../config/constant");
const asyncErrorHandler = require('../../utils/asyncErrorHandler');


// Create Ticket
const createTicket = asyncErrorHandler(async(req , res)=>{
    const project = await Project.findByPk(req.params.id);
    if(!project){
        return  res.status(STATUS_CODE.NOT_FOUND).json({
            message:'Project Not found'
        })
    }

    const user = await User.findByPk(req.body.assignedTo);
    if(!user){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:"User Not Found"
        })
    }

    const ticket = await Ticket.create({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status,
        type:req.body.type,
        priority:req.body.priority,
        projectId:project.id,
        assignedTo:user.id,
        createdBy:req.user.id
    })

    return res.status(STATUS_CODE.CREATED).json({
        message:TEXTS.CREATED,
        ticket
    })
});



// Get all Ticket
const getAll = asyncErrorHandler(async (req, res) => {
    const tickets = await Ticket.findAll({
      include: [
        {
          model: User,
          as: 'assignedUser',
          attributes: ['id', 'name'],
        },
      ],
    });
  
    if (tickets.length === 0) {
      return res.status(STATUS_CODE.NOT_FOUND).json({
        message: 'Ticket Not found',
      });
    }
  
    return res.status(STATUS_CODE.SUCCESS).json({
      message: 'Tickets fetched successfully',
      tickets,
    });
  });
  


  // Get Single Ticket
const getById = asyncErrorHandler(async(req,res)=>{
    const ticket = await Ticket.findByPk(req.params.id,{
        include: [
        {
          model: User,
          as: 'assignedUser',
          attributes: ['id', 'name'],
        },
      ],});

    if(!ticket){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:"Ticket not found"
        })
    }

    return res.status(STATUS_CODE.SUCCESS).json({
        ticket
    })
})


// Update Ticket
const updateTicket = asyncErrorHandler(async(req,res)=>{
    const ticket = await Ticket.findByPk(req.params.id);

    if(!ticket){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:"Ticket not found"
        })
    }

    if(ticket.status === 'complete'){
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            message:"Ticket Status completed "
        })
    }

    await ticket.update(req.body);
    await ticket.save();

    return res.status(STATUS_CODE.SUCCESS).json({
        message:"Ticket Updated",
        ticket
    })
});



// Delete Ticket
const remove = asyncErrorHandler(async(req,res)=>{
    const ticket = await Ticket.findByPk(req.params.id);

    if(!ticket){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:"Ticket not found"
        })
    }

    await ticket.distroy()

    return res.status(STATUS_CODE.SUCCESS).json({
        message:"Ticket Deleted"
    })
})


//-------------------- User role functionalitys -------------------//
const viewOurTicket = asyncErrorHandler(async(req,res)=>{
    const assignedTo = req.user.id
    const tickets = await Ticket.findAll({where:{assignedTo}});

    if(tickets.length === 0){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:"Ticket not found"
        })
    }

    return res.status(STATUS_CODE.SUCCESS).json({
        tickets
    })
});


const updateStatus = asyncErrorHandler(async(req,res)=>{
    const id = req.params.id
    const assignedTo = req.user.id
    const ticket = await Ticket.findOne({where:{id,assignedTo}});

    if(!ticket){
        return res.status(STATUS_CODE.BAD_REQUEST).json({
            message:"You cannot update status"
        })
    }

    await ticket.update({ status: req.body.status });
    

    return res.status(STATUS_CODE.SUCCESS).json({
        ticket
    })
})

module.exports ={createTicket,getAll,getById,updateTicket,remove,viewOurTicket,updateStatus}