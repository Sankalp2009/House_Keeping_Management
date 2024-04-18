const Appointment = require('../Model/Appointment_Model');

exports.getAllAppointment= async (req, res) => 
{ 
    try
    { 

        const appointment = await Appointment.find();
        return res.status(202).json({
            status: 'Success',
            result: appointment.length,
            appointment
        });
    }
    catch(err)
    {
        res.status(500).json({ message: err.message });
    }   
}
exports.getAppointmentById = async (req, res) => 
{
    try
    {
        const id = req.params.id;
        const appointment = await Appointment.findById(id);
        return res.status(202).json({status: 'Success',result: appointment,data: { appointment }})    
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).json({status: 'Error',message: 'Invalid Appointment'})
}
}   
exports.createAppointment = async (req, res)=> 
{   
    try {
    const NewAppointment = await Appointment.create(req.body)
    return res.status(201).json({
            status: 'Appointment Added Successfully',
            data: {
                Appointment : NewAppointment
            }
        });
    } 
    catch (err) 
    {
        return res.status(400).json({ message: err.message });
    }

}
exports.updateAppointment = async (req, res) => {

    try
    {
        const id = req.params.id;
        const appointment = await Appointment.findByIdAndUpdate(id,req.body,{
            new : true
        })
       return res.status(202).json({
            status: 'Success',
            data: { appointment }
       })    
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).json({status: 'Error', message: err.message});
} 
}
exports.deleteAppointment = async (req, res) => {

    try
    {
        const id = req.params.id;
        const appointment = await Appointment.findByIdAndDelete(id)
        return res.status(202).json({ message: 'Deleted Appointment' })
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({ message: err.message });
} 
}