const { Document} = require ("../Config/migrations" );
exports.creatDocument = async (req, res) => {
    try {
      
        const Document = await Document.create({
          Provinces: req.body.Province,
          Communes: req.body.Communes,
          intitulededocument: req.body.intitulededocument,
          Responsables:req.body.Responsables,
          Collaborateurs:req.body.Collaborateurs,
          Bet:req.body.Bet,
          Situation:req.body.Situation,
          Document:req.body.Document,
        
        });
        console.log("done");
    
        res.status(201).json({
          Document: Document,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };


exports.findDocument = async (req, res) => {
    try {
    
        const Document = await Document.findAll();
    
        if (!Document) {
          res.status(401).json({
            message: "document not found",
          });
        } else {
          res.status(201).json({
            message: "success",
            Document: Document,
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.updateDocument = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const Document = await  Document.update(data,{where: {id: id}})

        res.status(200).json({
            message: ' Document updated successfully',
            Document: Document,
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.deleteDocument = async (req,res)=>{
    try {
        const id = req.params.id

        const  Document= await  Document.destroy({where: {id: id}})

        res.status(200).json({
            message: ' Document deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}
