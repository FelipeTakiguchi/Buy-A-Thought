namespace WebApplication1.Repositories;
using WebApplication1.Model;

public interface IImageRepository : IRepository<ImageDatum>
{
    Task<int> GetLastIndex();
}