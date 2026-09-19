//let's pretend this is a database and that
// these passwords are appropriately encrypted
// in a real app

const sampleUsers = [{
        "id": "asdfasdfasdfasdfasdf",
        "name": "Safe User",
        "email": "safe@example.com",
        "password": "pw",
        "lastLogin": "asdfasdfasdfasdfasdf"
    },
    {
        "id": "asdfasdfasdfasdfasdf",
        "name": "Unsafe User",
        "email": "unsafe@example.com",
        "password": "pw",
        "lastLogin": "asdfasdfasdfasdfasdf"
    }
];

//these are the hardcoded breaches that we will 
//pretend came form an API
const sampleBreaches = [{
        "id": "asdfasdfasddddfasdfasdf",
        "name": "Bolt",
        "domain": "bolt.cd",
        "breachDate": "202asdfasd",
        "addedDate":"asdfasdfasd"
    },
    {
        "id": "asdfasdfasdaafasdfasdf",
        "name": "Elance",
        "domain": "elance.com",
        "breachDate": "202asdfasd",
        "addedDate":"asdfasdfasd"
    }
]

export {
    sampleUsers,
    sampleBreaches,
}