using System;
using System.Collections.Generic;

namespace WebApplication1.Model;

public partial class Usuario
{
    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public string Nome { get; set; } = null!;

    public string? Descricao { get; set; }

    public byte[] Senha { get; set; } = null!;

    public string Salt { get; set; } = null!;

    public DateTime DataNascimento { get; set; }

    public int? ImageId { get; set; }

    public virtual ImageDatum? Image { get; set; }
}
