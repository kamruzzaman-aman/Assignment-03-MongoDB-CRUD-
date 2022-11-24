const{cloudClient} = require('./dbConfig')
const dataFind = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        const filter ={Roll:104};
        const updateFilter = {
            $set:{
                Class: "Eleven",
                City: "Bogra"
            }
        };
        const updateResult = await myCollection.updateOne(filter,updateFilter);   
        console.log(updateResult);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataFind();