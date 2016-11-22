using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Codefiction.TechRadar.Models
{  
    internal class Voter
    {
        [BsonId]
        public ObjectId ObjectId { get; set; }
        
        [BsonElement("Ip")]
        public string Ip { get; set; }
        
        [BsonElement("Country")]
        public string Country { get; set; }    
    }
}