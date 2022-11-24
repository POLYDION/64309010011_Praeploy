let obj = {
    "fristname":"John",
    "lastname":"Smith",
    "isAlive":true,
    "age":25,
    "address":{
        "streetAddress":"21 2nd Street",
        "city":"New York",
        "state":"NY",
        "postalCode":"10021-3100"
    },
    "phoneNumbers":[{
        "type":"home",
        "number":"212 555-1234"
    },
    {
        "type":"office",
        "number":"646 55-4567"
    },
    {
        "type":"mobile",
        "number":"123 456-7890"
    }
],
    "children":[],
    "spouse": null
};
console.log(obj.fristname+obj.lastname);
console.log(obj.address.streetAddress);
console.log(obj.phoneNumbers[1].number)