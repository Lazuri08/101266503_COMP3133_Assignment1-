const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// MongoDB connection URL
const DB_URL = "mongodb+srv://fpanda:fpanda@cluster0.gzuk5c6.mongodb.net/COMP3133_Assignment1?retryWrites=true&w=majority";

// Connect to MongoDB database
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected");
}).catch(err => {
  console.log('Fail to connect to the database.', err);
  process.exit();
});

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
