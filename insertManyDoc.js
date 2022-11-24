
const {cloudClient} = require('./dbConfig')

const dataInsert = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        const stdDetails =[
            {name: "Ab Alim", Roll: 108, Class: "Ten", City:"Rajshahi"},
            {name: 'Ab Karim', Roll: 109, Class: 'Ten', City: 'Rajshahi'},
            {name: 'Ab Rahim', Roll: 110, Class: 'Ten', City: 'Dhaka'}
        ];

        const insertedResult = await myCollection.insertMany(stdDetails);
        console.log(`A document was inserted with the _id: ${insertedResult.insertedCount}`);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataInsert();