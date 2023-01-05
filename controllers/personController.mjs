import personModel from "../src/persistence/models/personModel.mjs";

const addPerson=async (req, res)=>{
try {
    await personModel.create(req.body);
    res.json({
        message: "Added person succeded"
    })

} catch (error) {
    res.json({
        message: "Person can not be added"+error,
    });
}
}

const showPeople = async (req, res) => {
try {
    const people = await personModel.findAll();
    res.json(people)

} catch (error) {
    res.json({
        message: "could not find them" + error
    });

}
}
const showPerson = async (req, res) => {
try {
    const person = await person.findOne({
        where: 
            {id: req.params.id}
    });
    res.json(people)

} catch (error) {
    res.json({
        message: "could not find him" + error
    });
}
}

const editPerson = async (req, res) => {

try {
    await personModel.update(req.body, {
        where: {
            id: req.params.id
            
        }
    });
    res.json({
        message: "Edited person"
    });

} catch (error) {
    res.json({
        message: "could not be edited" + error
    });
}

}

const deletePerson = async (req, res) => {
try {

    await person.destroy({
        where: {id: req.params.id}
    });
    res.json({
        message: "deleted person success"
    });

} catch (error) {
    res.json({
        message: "could not be deleted" + error
    });

}

}

export { addPerson, showPeople, showPerson, deletePerson, editPerson}