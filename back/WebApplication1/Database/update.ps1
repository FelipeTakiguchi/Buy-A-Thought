$BD_SERVER_NAME = "SNCCHLAB01F19\TEW_SQLEXPRESS"
$BD_DATABASE_NAME = "BuyAThought"
$strconn = "Data Source=" + $BD_SERVER_NAME + ";Initial Catalog=" + $BD_DATABASE_NAME + ";Integrated Security=True;TrustServerCertificate=true"
dotnet ef dbcontext scaffold $strconn Microsoft.EntityFrameworkCore.SqlServer --force -o Model