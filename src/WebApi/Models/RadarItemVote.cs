using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Codefiction.TechRadar.Models
{  
    internal class RadarItemVote : RadarItem
    {
        [BsonElement("Point")]
        public int Point { get; set; }

        [BsonElement("Voter")]
        public Voter Voter { get; set; }
    }

}