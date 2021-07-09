const contactsJson=require("../models/contacts.json");

const getAll=(req,res)=>{
    res.status(200).send(contactsJson)
}

const getById=(req,res)=>{
    const requiredId=res.params.id
    const filteredId=contactsJson.find(contact=>contact.id==requiredId)

    res.status(200).send(filteredId)
}

const createContacts=(req,res)=>{

    const requiredName=req.body.name

    const requiredNumber=req.body.mobileNumber

    const requiredSocial=req.body.socialNetworking

    const newContacts={
        id:"123",
        nome:requiredName,
        mobileNumber:requiredNumber,
        socialNetworking:requiredSocial

    };

    contactsJson.push(newContacts);

    res.status(200).send(newContacts);

};

const deleteContact=(req,res)=>{
    const requiredId=req.params.id;
    const filteredId=contactsJson.find(contact=>contact.id==requiredId);

    const indice=contactsJson.indexOf(filteredId);

    console.log(indice);

    contactsJson.splice(indice,1);

    res.status(200).send(
        [
            {
                "message":"Contato deletado com susseco!"
            },
            contactsJson
        ]
    )

}

module.exports={
    getAll,
    getById,
    createContacts,
    deleteContact
}