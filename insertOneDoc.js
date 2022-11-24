
const{cloudClient} = require('./dbConfig')

const dataInsert = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        const stdDetails ={name: "Tanjil", Roll: 107, Class: "Ten", City:"Dhaka"}

        const insertedResult = await myCollection.insertOne(stdDetails);
        console.log(`A document was inserted with the _id: ${insertedResult.insertedId}`);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataInsert();