create table users(
id serial primary key,
username varchar(255) unique not null,
name varchar(255) not null,
password text not null,
created_at timestamp default now()  
)

create table transactions(
id serial primary key,
user_id int not null,
contact_id int not null,
contact_name varchar(255) not null,

CONSTRAINT fk_transaction_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_transaction_contract
    FOREIGN KEY (contact_id)
    REFERENCES contact(id)
    ON DELETE CASCADE) 