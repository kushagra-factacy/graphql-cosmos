require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server-express')
const { CosmosClient } = require('@azure/cosmos')
const express = require('express')


const client = new CosmosClient({
  endpoint: process.env.ENDPOINT,
  key: process.env.KEY
})

//importing the typedef

const { typeDefs } = require('./schema.js')

const resolvers = {

  Query: {
    aka: async () => {
      const con_aka = client.database(process.env.DATABASE).container(process.env.CON_AKA)
      const response = await con_aka.items.query('SELECT TOP 1000 * from  c').fetchAll()
      return response.resources
    },
    business_news: async (parent , _args) => {
      const con_business_news = client.database(process.env.DATABASE).container(process.env.CON_BUSINESS_NEWS)
      const response = await con_business_news.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources

    },
    aicite_ic: async () => {
      const con_aicite_ic = client.database(process.env.DATABASE).container(process.env.CON_AICITE_IC)
      const response = await con_aicite_ic.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    org: async () => {
      const con_org = client.database(process.env.DATABASE).container(process.env.CON_ORG)
      const response = await con_org.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    org_ic: async () => {
      const con_org_ic = client.database(process.env.DATABASE).container(process.env.CON_ORG_IC)
      const response = await con_org_ic.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    designation_ic: async () => {
      const con_designation_ic = client.database(process.env.DATABASE).container(process.env.CON_DESIGNATION_1)
      const response = await con_designation_ic.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    coinuse_i: async () => {
      const con_coinuse_i = client.database(process.env.DATABASE).container(process.env.CON_COINUSE_1)
      const response = await con_coinuse_i.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    aka_search: async () => {
      const con_aka_search = client.database(process.env.DATABASE).container(process.env.CON_AKA_SEARCH)
      const response = await con_aka_search.items.query('SELECT  TOP 10 * from  c').fetchAll()
      return response.resources
    },

    locator: async () => {
      const con_locator = client.database(process.env.DATABASE).container(process.env.CON_LOCATOR)
      const response = await con_locator.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    person_all: async () => {
      const con_person_all = client.database(process.env.DATABASE).container(process.env.CON_PERSON_ALL)
      const response = await con_person_all.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    rel8d: async () => {
      const con_rel8d = client.database(process.env.DATABASE).container(process.env.CON_REL8D)
      const response = await con_rel8d.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
    art_id: async () => {
      const con_art_id = client.database(process.env.DATABASE).container(process.env.CON_ART_ID)
      const response = await con_art_id.items.query('SELECT  TOP 5 * from  c').fetchAll()
      return response.resources
    },
  // wrtie a resolver for querying all containers using a single entry point Art_Id
  

    

  }
  

  






    

    } 

   

    
   
  
  
  

const server = new ApolloServer({ typeDefs, resolvers })
const app = express();

server.start().then(() => {
server.applyMiddleware({ app });
});
app.listen({ port: 4002 }, () =>
  console.log(`🚀 Server ready at http://localhost:4002${server.graphqlPath}`)
);
