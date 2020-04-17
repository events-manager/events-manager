import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.Promise = global.Promise

// TODO TMP Hardcoded connection.. db will change anyway
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://cloudspider:Oxt8G0EYtZp1CLQ1@gather-ww7jx.mongodb.net/gather?retryWrites=true&w=majority'

const connection = mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 50,
  bufferMaxEntries: 0,
  keepAlive: 120,
  useNewUrlParser: true
})

mongoose.set('useCreateIndex', true)

connection.then((db) => db).catch((err) => {
  // eslint-disable-next-line no-console
  console.log(err)
})

export default connection
