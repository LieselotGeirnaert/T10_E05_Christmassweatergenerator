const contentful = require("contentful-management")
const shortid = require("shortid")
const querystring = require("querystring")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

exports.handler = async function(event, context, callback) {
  try {
    const sweater = querystring.parse(event.body);
    sweater.id = shortid.generate();

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")
    const entry = await environment.createEntryWithId("sweater", sweater.id, {
      fields: {
        designer: {
          "en-US": sweater.designer,
        },
        slogan: {
          "en-US": sweater.slogan,
        },
      },
    })
    await entry.publish()

    return callback(null, {
      body: JSON.stringify(entry.fields),
      statusCode: 302,
      headers: {
        Location: `/sweater/${sweater.id}`,
      },
    })

  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
