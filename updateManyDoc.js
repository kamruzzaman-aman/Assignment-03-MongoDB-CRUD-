const{cloudClient} = require('./dbConfig')

const dataFind = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        const filter ={Class:"Ten"};
        const updateFilter = {
            $set:{
                Class: "Nine"     
            }
        };
        const updateResult = await myCollection.updateMany(filter,updateFilter);   
        console.log(updateResult);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataFind();