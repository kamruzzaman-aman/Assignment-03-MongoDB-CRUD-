
const{cloudClient} = require('./dbConfig')

const dataDelete = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        const deleteItem ={Roll: 105}

        const deleteResult = await myCollection.deleteOne(deleteItem);
        console.log(`A document delete: ${deleteResult}`);

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataDelete();