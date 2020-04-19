# Data sources

In the API the main method of retrieving data from a storage or an external source is via 
[Data sources](https://www.apollographql.com/docs/apollo-server/data/data-sources/). This 
way we abstract away the storage layer allowing multiple storage mechanisms and even a complete 
switch to a different storage.
In our case we have now one type of data source which is 
[apollo-datasource-mongodb](https://github.com/GraphQLGuide/apollo-datasource-mongodb). 
This Mongo Data source helps us efficiently apply queries on MongoDB and at the same time batch any 
requests if possible using the [DataLoader](https://github.com/graphql/dataloader).

Each Mongo Data source relies on 2 things:
 
- A Mongoose Model which represents the "type", its fields and its relations. For example an Event.
- A Collection which has methods like `getById`, `getAll` or `getBySlug` that can be used by the API resolvers.

## Creating a data source

Create a file with a Model as its default export in `./src/models` like below:

*./src/models/event.js*
```js
import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  id: String,
  slug: String,
  name: String,
}, { collection: 'articles' }) // Tell the model that it uses this mongo collection

export default mongoose.model('article', articleSchema)
``` 

Create a file in `./src/collections/` representing the collection and its methods required by the app:

*./src/collections/articles.js*
```js
import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Articles extends MongoDataSource {
  getById(id) {
    if (!id) {
      throw new Error('Missing parameter: "id" is required')
    }
    return this.model.findOne({ id })
  }

  getAll(selector) {
    return this.model.find(selector)
  }
}
```

As you might have noticed, the collection uses `this.model` which is the Model that we've just created. 
The two are combined in the step below:

Open `./src/dataSources.js` and add the new data source like below:

```js
import Events from './collections/events'
import Articles from './collections/articles' // This was added
import EventModel from './models/event'
import ArticleModel from './models/article' // This was added

export default () => ({
  events: new Events(EventModel),
  articles: new Articles(ArticleModel) // This was added
})
```

You can now use it in the resolvers via the context:

```js
const articlesResolver = (parent, params, context) => {
  return context.dataSources.articles.getAll()
}
```
