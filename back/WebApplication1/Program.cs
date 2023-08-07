using WebApplication1.Models;
using WebApplication1.Services;
using Security.Jwt;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DatabaseSettings>(
    builder.Configuration.GetSection("StoreDatabase"));

builder.Services.AddSingleton<SecretService>();
builder.Services.AddSingleton<IdeaService>();
builder.Services.AddSingleton<UserService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IPasswordHasher, BasicPasswordHasher>();
builder.Services.AddTransient<IJwtService, JwtService>();

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
