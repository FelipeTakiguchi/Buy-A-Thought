using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApplication1.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Description { get; set; } = null!;
        public byte[] Password { get; set; } = null!;
        public string Salt { get; set; } = null!;
        public DateTime Birthday { get; set; }
        public int? ImageId { get; set; } = null!;
    }
}
