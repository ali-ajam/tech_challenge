const graphql = require('graphql');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const songType = new GraphQLObjectType({
  name: 'song',
  fields: () => ({
    id: { type: GraphQLID },
    song: { type: GraphQLString },
    artist: { type: GraphQLString },
    songReleaseDate: { type: GraphQLString },
    playCount: { type: GraphQLInt },
    metricA: { type: GraphQLInt },
    metricB: { type: GraphQLInt },
    metricC: { type: GraphQLInt },
    metricD: { type: GraphQLInt },
    metricE: { type: GraphQLInt },
    metricF: { type: GraphQLInt },
    metricG: { type: GraphQLInt },
    metricH: { type: GraphQLInt },
    metricI: { type: GraphQLInt },
    metricJ: { type: GraphQLInt },
    metricK: { type: GraphQLInt },
    metricL: { type: GraphQLInt },
    metricM: { type: GraphQLInt },
    metricN: { type: GraphQLInt },
    metricO: { type: GraphQLInt },
    metricP: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    song: {
      type: songType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await s3
          .getObject({ Bucket: 'iheart-songs', Key: 'songData.json' })
          .promise();
        return JSON.parse(data.Body.toString('utf-8'))[args.id];
      },
    },
    songs: {
      type: new GraphQLList(songType),
      async resolve(parent, args) {
        const data = await s3
          .getObject({ Bucket: 'iheart-songs', Key: 'songData.json' })
          .promise();
        return JSON.parse(data.Body.toString('utf-8'));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
