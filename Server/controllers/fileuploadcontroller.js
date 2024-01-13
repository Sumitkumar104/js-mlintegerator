exports.fileupload = async(req,res)=>{

    try {
        
        const datafile = req.files.file; 
        const path = __dirname + "/" + datafile.name;
        datafile.mv(path, {}) 
        console.log("file is successfully added");

    }
    catch (err) {
        console.log("there  is error in fileuploadcontroller system")
        console.log(err);

    }
    

}