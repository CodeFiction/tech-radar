using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Codefiction.TechRadar.Models
{  
    internal class RadarItem
    {    
        [BsonId]
        public ObjectId ObjectId { get; set; }
           
        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Description")]
        public string Description { get; set; }    

        [BsonElement("CategoryId")]
        public ObjectId CategoryId { get; set; }   
    }
}