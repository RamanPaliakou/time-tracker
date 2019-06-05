using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tracker.Web.Migrations
{
    public partial class secondary : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("1e05f9e0-29e6-4dcb-902f-02946d685618"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Fullname", "IsInitialized", "Password", "Token", "Username" },
                values: new object[] { new Guid("21336a83-663a-472f-b716-6ab8c1eb7fb5"), "test@test.com", "test", false, "test", null, "test" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("21336a83-663a-472f-b716-6ab8c1eb7fb5"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Fullname", "IsInitialized", "Password", "Token", "Username" },
                values: new object[] { new Guid("1e05f9e0-29e6-4dcb-902f-02946d685618"), "test@test.com", "test", false, "test", null, "test" });
        }
    }
}
