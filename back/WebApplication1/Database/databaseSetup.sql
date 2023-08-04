USE MASTER
go

if exists(select * from sys.databases where name = 'BuyAThought')
	drop database BuyAThought
go

create database BuyAThought
go
Use BuyAThought
go

create table Usuario(
	Id int primary key identity,
	Email varchar(100) not null,
	Name varchar(50) not null,
	Description varchar(255) null,
	Password varbinary(150) not null,
	Salt varchar(30) not null,
	Birth Date not null,
)

create table Secret(
	Id int primary key identity,
	Name varchar(50) not null,
	SmallDescription varchar(255) not null,
	DetailedDescription varchar(255) not null,
)