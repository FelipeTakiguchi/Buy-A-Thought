namespace WebApplication1.Repositories;
using WebApplication1.Model;

public interface IUserRepository : IRepository<Usuario>
{
    Task<bool> userNameExists(string username);
    Task<bool> emailExists(string email);
}