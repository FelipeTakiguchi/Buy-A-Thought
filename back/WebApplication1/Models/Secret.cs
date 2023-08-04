using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApplication1.Models
{
    public class Secret
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string SecretName { get; set; } = null!;
        public string SmallDescription { get; set; } = null!;
        public string DetailedDescription { get; set; } = null!;
        public bool ShowOwner { get; set; }
        public int IdPublisher { get; set; }
    }
}
