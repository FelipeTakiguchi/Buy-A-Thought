using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Repositories;
using WebApplication1.Model;


public class ImageRepository : IImageRepository
{
    private BuyAthoughtContext ctx;

    public ImageRepository(BuyAthoughtContext ctx)
        => this.ctx = ctx;

    public async Task Add(ImageDatum obj)
    {
        await ctx.ImageData.AddAsync(obj);
        await ctx.SaveChangesAsync();
    }

    public async Task Delete(ImageDatum obj)
    {
        ctx.ImageData.Remove(obj);
        await ctx.SaveChangesAsync();
    }

    public async Task Update(ImageDatum obj)
    {
        ctx.ImageData.Update(obj);
        await ctx.SaveChangesAsync();
    }

    public async Task<List<ImageDatum>> Filter(Expression<Func<ImageDatum, bool>> exp)
    {
        var query = ctx.ImageData.Where(exp);
        return await query.ToListAsync();
    }

    public async Task Save()
    {
        await ctx.SaveChangesAsync();
    }

    public async Task<int> GetLastIndex(){
        var img = await ctx.ImageData.OrderBy(img => img.Id).LastOrDefaultAsync();
        if(img != null)
            return img.Id;

        return 0; 
    }
}