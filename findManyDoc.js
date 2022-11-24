
const{cloudClient} = require('./dbConfig')

const dataFind = async()=>{
    try {
        const database = cloudClient.db("school");
        const myCollection = database.collection("students");
        
        // const findItemWithCondition ={Roll: 101}    //with condition
        const findItem ={}   //Without Condition___output all data

        const cursorObj = myCollection.find(findItem); 

        if((await cursorObj.EstimatedDocumentCount)===0){  
            console.log("No document found")
        }else{
            const arrayFormat = await cursorObj.toArray(); 
            console.log(arrayFormat);

            arrayFormat.forEach(value=>{
                console.log("name=====:"+value.name)
            })
            
        }

    } catch (error) {
        console.log(error);
    }finally{
        await cloudClient.close();
    }
}

dataFind();