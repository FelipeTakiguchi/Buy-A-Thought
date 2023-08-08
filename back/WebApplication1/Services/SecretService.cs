using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApplication1.Model;

namespace WebApplication1.Services
{
    public class SecretService
    {
        private readonly IMongoCollection<Secret> _secretsCollection;
        public SecretService(IOptions<DatabaseSettings> databaseSettings)
        {
            var mongoClient = new MongoClient(
                databaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                databaseSettings.Value.DatabaseName);

            _secretsCollection = mongoDatabase.GetCollection<Secret>(
                databaseSettings.Value.CollectionName);
        }

        public async Task<List<Secret>> GetAsync() =>
            await _secretsCollection.Find(_ => true).ToListAsync();

        public async Task<Secret?> GetAsync(string id) =>
            await _secretsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Secret newSecret) =>
            await _secretsCollection.InsertOneAsync(newSecret);

        public async Task UpdateAsync(string id, Secret updateSecret) =>
            await _secretsCollection.ReplaceOneAsync(x => x.Id == id, updateSecret);

        public async Task RemoveAsync(string id) =>
            await _secretsCollection.DeleteOneAsync(x => x.Id == id);
    }
}
