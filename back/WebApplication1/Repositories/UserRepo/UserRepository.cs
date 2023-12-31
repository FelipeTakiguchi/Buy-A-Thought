using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Repositories;
using WebApplication1.Model;

public class UserRepository : IUserRepository
{
    private BuyAthoughtContext ctx;

    public UserRepository(BuyAthoughtContext ctx)
        => this.ctx = ctx;

    public async Task Add(Usuario obj)
    {
        await ctx.Usuarios.AddAsync(obj);
        await ctx.SaveChangesAsync();
    }

    public async Task Delete(Usuario obj)
    {
        ctx.Usuarios.Remove(obj);
        await ctx.SaveChangesAsync();
    }

    public async Task Update(Usuario obj)
    {   
        ctx.Usuarios.Update(obj);
        await ctx.SaveChangesAsync();
    }

    public async Task<List<Usuario>> Filter(Expression<Func<Usuario, bool>> exp)
    {
        var query = ctx.Usuarios.Where(exp);
        return await query.ToListAsync();
    }

    public async Task<bool> userNameExists(string username)
        => await ctx.Usuarios.AnyAsync(u => u.Nome == username);
        
    public async Task<bool> emailExists(string email)
        => await ctx.Usuarios.AnyAsync(u => u.Email == email);

    public async Task Save()
    {
        await ctx.SaveChangesAsync();
    }
    public async Task<Usuario> Find(int id)
    {
        var user = await ctx.Usuarios.FindAsync(id);
        return user;
    }
}