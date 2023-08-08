using Microsoft.AspNetCore.Mvc;
using WebApplication1.Model;
using WebApplication1.Services;

namespace WebApplication1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IdeasController : ControllerBase
{
    private readonly IdeaService _ideaService;

    public IdeasController(IdeaService ideaService) =>
        _ideaService = ideaService;


    [HttpGet]
    public async Task<List<Idea>> Get() =>
        await _ideaService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Idea>> Get(string id)
    {
        var idea = await _ideaService.GetAsync(id);

        if (idea is null)
        {
            return NotFound();
        }

        return idea;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Idea newIdea)
    {
        await _ideaService.CreateAsync(newIdea);

        return CreatedAtAction(nameof(Get), new { id = newIdea.Id }, newIdea);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Idea updateIdea)
    {
        var idea = await _ideaService.GetAsync(id);

        if (idea is null)
        {
            return NotFound();
        }

        updateIdea.Id = idea.Id;

        await _ideaService.UpdateAsync(id, updateIdea);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var idea = await _ideaService.GetAsync(id);

        if (idea is null)
        {
            return NotFound();
        }

        await _ideaService.RemoveAsync(id);

        return NoContent();
    }
}