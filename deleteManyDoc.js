const{cloudClient} = require('./dbConfig')

const allDataDelete = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        const deleteItem ={Class: "Ten"}   //With Condition 
        // const deleteItem ={ }   //Without Condition

        const deleteResult = await myCollection.deleteMany(deleteItem);
        console.log(deleteResult);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

allDataDelete();