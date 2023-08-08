using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApplication1.Model
{
    public class Idea
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string IdeaName { get; set; } = null!;
        public string SmallDescription { get; set; } = null!;
        public string DetailedDescription { get; set; } = null!;
        public int IdPublisher { get; set; }
    }
}
