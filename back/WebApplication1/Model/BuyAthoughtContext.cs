using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Model;

public partial class BuyAthoughtContext : DbContext
{
    public BuyAthoughtContext()
    {
    }

    public BuyAthoughtContext(DbContextOptions<BuyAthoughtContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ImageDatum> ImageData { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=SNCCHLAB01F19\\TEW_SQLEXPRESS;Initial Catalog=BuyAThought;Integrated Security=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ImageDatum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ImageDat__3214EC273B5D3D53");

            entity.Property(e => e.Id).HasColumnName("ID");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC0738D1F7EC");

            entity.ToTable("Usuario");

            entity.Property(e => e.DataNascimento)
                .HasColumnType("date")
                .HasColumnName("Data_Nascimento");
            entity.Property(e => e.Descricao)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Salt)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Senha).HasMaxLength(150);

            entity.HasOne(d => d.Image).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.ImageId)
                .HasConstraintName("FK__Usuario__ImageId__1273C1CD");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
