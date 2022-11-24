
const{cloudClient} = require('./dbConfig')

const dataFind = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        // const findItemWithCondition ={Roll: 105}    //With condition
        const findItem ={}   //Without Condition___output first item of doc

        const findResult = await myCollection.findOne(findItem);
        console.log(findResult);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataFind();