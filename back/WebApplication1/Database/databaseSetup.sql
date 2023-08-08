USE MASTER
go

if exists(select * from sys.databases where name = 'BuyAThought')
	drop database BuyAThought
go

create database BuyAThought
go
Use BuyAThought
go

create table ImageData(
	ID int identity primary key,
	Photo varbinary(MAX) not null
);
go


create table Usuario(
	Id int primary key identity,
	Email varchar(100) not null,
	Nome varchar(50) not null,
	Descricao varchar(255) null,
	Senha varbinary(150) not null,
	Salt varchar(30) not null,
	Data_Nascimento Date not null,
	ImageId int References ImageData(Id),
)
