const note=require('../models/note');

exports.renderAddNote=(req,res)=>{
    res.render('addNote');
}

exports.addNote=async (req,res)=>{
    try{
        const {text}=req.body;
        if(!text){
            return res.status(400).send('Text is required');
        }
        const newNote=new note({
            text:text
        });
        await newNote.save();
        res.redirect('/all-notes');
    }catch(err){
        console.log(err);
        res.status(500).send('Error adding note');
    }
}

exports.renderAllNotes = async (req, res) => {
    try {
        const notes = await note.find();
        res.render('allNotes', { notes }); 
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).send('Error fetching notes');
    }
};

