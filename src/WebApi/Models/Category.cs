using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Codefiction.TechRadar.Models
{  
    internal class Category
    {
        [BsonId]
        public ObjectId ObjectId { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Description")]
        public string Description { get; set; }    

        [BsonElement("RadarItems")]
        public List<RadarItem> RadarItems { get; set; }
    }
}