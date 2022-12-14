drop database moviedb;
create database if not exists moviedb;
use moviedb;

create table movies(
	id varchar(10) not null,
    title varchar(100) not null,
    year integer not null,
    directory varchar(100) not null,
    PRIMARY KEY (id)
);

create table stars(
	id varchar(10) not null,
    name varchar(100) not null,
    birthYear Integer,
    primary key(id)
);

create table stars_in_movies(
	starId varchar(10) not null,
    movieId varchar(10) not null,
    foreign key (starId) references stars(id),
    foreign key (movieId) references movies(id)
);

create table genres(
	id integer not null AUTO_INCREMENT,
    name varchar(32) not null,
    primary key (id)
);

create table genres_in_movies(
	genreId integer not null,
    movieId varchar(10) not null,
    foreign key(genreId) references genres(id),
    foreign key(movieId) references movies(id)
);

create table customers(
	id integer not null AUTO_INCREMENT,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    ccId varchar(20) not null,
    address varchar(200) not null,
    email varchar(50) not null,
    password varchar(20) not null,
    primary key (id)
);

create table sales(
	id integer not null auto_increment,
    customerId integer not null,
    movieId varchar(10) not null,
    saleDate date not null,
    primary key(id),
    foreign key(customerId) references customers(id),
    foreign key(movieId) references movies(id)
);

create table creditcards(
	id varchar(20) not null,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    expiratation date not null,
    primary key(id)
);

create table ratings(
	movieId varchar(10) not null,
    rating float not null,
    numVotes integer not null,
    foreign key (movieId) references movies(id)
);