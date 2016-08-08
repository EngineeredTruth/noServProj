create table serverData(
  id serial primary key not null,
  friendly int,
  cleanliness int,
  drinks int,
  accuracy int,
  timeliness int,
  billTotal money,
  tipAmount money,
  finalBillTotal money,
  serverName varchar(25)
);
