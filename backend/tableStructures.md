### meals table ###
create table meals(
id serial Primary key,
userId int references usertable(id) on delete cascade,
isNight bool default FALSE,
date Date not null, 
price int not null
)

### user table
create table usertable(
    id serial primary key,
    username varchar(255) not null,
    fname
    lname
    
)

