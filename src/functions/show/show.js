const contentful = require("contentful-management")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

const storage = new Map()

exports.handler = async function(event, context) {
  try {
    const id = event.queryStringParameters.id.replace("/", "")
    let sweater;

    console.log(id);
    // if (storage.has(id)) {
    //   console.log("in de storage gevonden");
    //   sweater = storage.get(id);
    // } else {
      const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
      const environment = await space.getEnvironment("master")
      const entry = await environment.getEntry(id)
  
      sweater = {
        designer: entry.fields.designer["en-US"],
        slogan: entry.fields.slogan["en-US"],
      } 
      
    //   console.log("in storage plaatsen");
    //   storage.set(id, sweater);
    // }
    
    return {
      statusCode: 200,
      body: JSON.stringify(sweater)
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
