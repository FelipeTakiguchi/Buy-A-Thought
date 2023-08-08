using WebApplication1.Model;
using WebApplication1.Services;
using Security.Jwt;
using WebApplication1.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DatabaseSettings>(
    builder.Configuration.GetSection("StoreDatabase"));

builder.Services.AddSingleton<SecretService>();
builder.Services.AddSingleton<IdeaService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<BuyAthoughtContext>();
builder.Services.AddTransient<IPasswordHasher, BasicPasswordHasher>();
builder.Services.AddTransient<IJwtService, JwtService>();
builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IImageRepository, ImageRepository>(); 

builder.Services.AddTransient<IPasswordProvider>(p =>{
    return new PasswordProvider("minhasenhaultrasecreta");
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
