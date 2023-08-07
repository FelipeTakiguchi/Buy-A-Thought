using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SecretsController : ControllerBase
{
    private readonly SecretService _secretsService;

    public SecretsController(SecretService secretsService) =>
        _secretsService = secretsService;


    [HttpGet]
    public async Task<List<Secret>> Get() =>
        await _secretsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Secret>> Get(string id)
    {
        var secret = await _secretsService.GetAsync(id);

        if (secret is null)
        {
            return NotFound();
        }

        return secret;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Secret newSecret)
    {
        await _secretsService.CreateAsync(newSecret);

        return CreatedAtAction(nameof(Get), new { id = newSecret.Id }, newSecret);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Secret updatedSecret)
    {
        var secret = await _secretsService.GetAsync(id);

        if (secret is null)
        {
            return NotFound();
        }

        updatedSecret.Id = secret.Id;

        await _secretsService.UpdateAsync(id, updatedSecret);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var secret = await _secretsService.GetAsync(id);

        if (secret is null)
        {
            return NotFound();
        }

        await _secretsService.RemoveAsync(id);

        return NoContent();
    }
}