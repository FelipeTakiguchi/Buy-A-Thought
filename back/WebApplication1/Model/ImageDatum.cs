using System;
using System.Collections.Generic;

namespace WebApplication1.Model;

public partial class ImageDatum
{
    public int Id { get; set; }

    public byte[] Photo { get; set; } = null!;

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
