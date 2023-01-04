create database Inventory
use Inventory

create table Person (
id int identity (1,1) primary key not null,
[name] varchar (100) not null,
lastName varchar (100) not null,
phoneNumber varchar (30) not null,
cellPhoneNumber varchar (30) not null,
[address] varchar (200) not null,
documentType varchar (50) not null,
email varchar (200) not null,
createdAt date not null,
updatedAt date not null);

create table [Role] (
id int identity (1,1) primary key not null,
roleName varchar (100) not null,
[description] varchar (255) not null,
createdAt date not null,
updatedAt date not null);

create table [User] (
id int identity (1,1) primary key not null,
userName varchar (255) not null,
[password] varchar (200) not null,
personId int not null,
constraint fk_person foreign key
(personId) references Person (id),
idRole int not null
constraint fk_Role foreign key
(idRole) references [Role] (id),
createdAt date not null,
updatedAt date not null
);

create table Permission (
id int identity (1,1) primary key not null,
permissionName varchar (255) not null,
[description]  varchar (255) not null,
createdAt date not null,
updatedAt date not null
);

create table Menu (
id int identity (1,1) primary key not null,
[name] varchar (100) not null,
[route] varchar (255) not null,
createdAt date not null,
updatedAt date not null);

create table RolePermissionMenu (
id int identity (1,1) primary key not null,
permissionId int not null,
menuId int not null,
roleId int not null,
constraint fk_permission foreign key
(permissionId) references Permission (id),
constraint fk_menu foreign key
(menuId) references Menu (id),
constraint fk_roled foreign key
(roleId) references [Role] (id),
createdAt date not null,
updatedAt date not null
);

create table Product (
id int identity (1,1) primary key not null,
sku varchar (100) not null,
productName varchar (255) not null,
quantity int not null,
minimunQuantity int not null,
purchasePrice float not null,
salePrice float not null,
createdAt date not null,
updatedAt date not null
);

create table Input (
id int identity (1,1) primary key not null,
dateEntry date not null,
invoiceNumber int not null,
total float not null,
providerId int not null,
constraint fk_provider foreign key
(providerId) references [User] (id),
createdAt date not null,
updatedAt date not null
);

create table InputDetail (
id int identity (1,1) primary key not null,
productId int not null,
quantity int not null,
unitPrice float not null,
totalPrice float not null,
entryId int not null,
constraint fk_input foreign key
(entryId) references Input (id),
constraint fk_product foreign key
(productId) references Product (id),
createdAt date not null,
updatedAt date not null
);

create table Invoice (
id int identity (1,1) primary key not null,
invoiceCode varchar (100) not null,
[date] date not null,
userId int not null,
[status] varchar (255) not null,
grossValue float not null,
netWorth float not null,
discount float not null,
taxes float not null,
constraint fk_userdoc foreign key
(userId) references [User] (id),
createdAt date not null,
updatedAt date not null
);

create table InvoiceDetail (
id int identity (1,1) primary key not null,
invoiceId int not null,
productId int not null,
quantity int not null,
unitPrice float not null,
total float not null,
discount float null,
constraint fk_invoice foreign key
(invoiceId) references Invoice (id),
constraint fk_productd foreign key
(productId) references Product (id),
createdAt date not null,
updatedAt date not null
);