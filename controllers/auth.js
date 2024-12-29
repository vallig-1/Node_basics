exports.users = (req,res) => {
    res.json({
        users:[
        {
            name: "Valli",
            age : 19,
        },
        {
            name: "Vishnu",
            age : 55,
        },
    ],

    });
};


