const express = require(`esxpress`);
const app = express();
const PORT = 3000;

app.use(express.json());

let user = [
    {id:1, firstName:`jericho`, lastName:`muhi`, section:`bsit 4b`, status: `present`},
    {id:2, firstName:`jericho`, lastName:`muhi`, section:`bsit 4b`, status: `absent`},
];

app.get(`/users`, (req, res) => {
    const {firstName,lastName,section,status} = req.body;
    const userIndex = user.findIndex(user => user.firstName === firstName && user.lastName === lastName);

    if (userIndex !== -1) {
        user[userIndex].status = status;
        console.log(`update attendance for ${lastName} ${firstName} to: ${status}`);
        res.status(200).json({ message: `Attendance updated for ${lastName} ${firstName} to: ${status}` });
    } 
    else {
        const newuser = {
            id:user.length + 1,
            firstName,
            lastName,
            section,
            status
        };
        user.push(newuser);
        console.log(`New User added: ${lastName} ${firstName} with status: ${status}`);
        res.status(201).json({ message: `New Student ${firstName} ${lastName} has been added with status ${status}` });

    }
    
});
    
app.get(`/users/:id`, (req, res) => {
    res.status(200).json(user);
});    

app.get(`/users/:id`, (req, res) => {
    res.send(`Server is up and Running`);
});    

module.exports = app;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});