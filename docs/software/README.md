# Реалізація інформаційного та програмного забезпечення

- SQL-скрипт для створення на початкового наповнення бази даних

```sql
	-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`idUser` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Permission` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
  `idPermission` INT NOT NULL,
  `Post` TINYINT NULL,
  `Comment` TINYINT NULL,
  `Edit` TINYINT NULL,
  `Delete` TINYINT NULL,
  PRIMARY KEY (`idPermission`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `idRole` INT NOT NULL AUTO_INCREMENT,
  `RoleName` VARCHAR(45) NULL,
  `Permission_idPermission` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idRole`, `Permission_idPermission`),
  UNIQUE INDEX `idRole_UNIQUE` (`idRole` ASC) VISIBLE,
  INDEX `fk_Role_Permission_idx` (`Permission_idPermission` ASC) VISIBLE,
  INDEX `fk_Role_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Role_Permission`
    FOREIGN KEY (`Permission_idPermission`)
    REFERENCES `mydb`.`Permission` (`idPermission`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Role_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Tag` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Tag` (
  `idTag` INT NOT NULL,
  `TagName` VARCHAR(45) NULL,
  PRIMARY KEY (`idTag`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Data` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Data` (
  `idData` INT NOT NULL,
  `Date` DATETIME NULL,
  `DataName` VARCHAR(45) NULL,
  `DataFormat` VARCHAR(45) NULL,
  `Tag_idTag` INT NOT NULL,
  PRIMARY KEY (`idData`),
  INDEX `fk_Data_Tag1_idx` (`Tag_idTag` ASC) VISIBLE,
  CONSTRAINT `fk_Data_Tag1`
    FOREIGN KEY (`Tag_idTag`)
    REFERENCES `mydb`.`Tag` (`idTag`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Comment` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Comment` (
  `CommentText` TEXT NOT NULL,
  `User_idUser` INT NOT NULL,
  `Data_idData` INT NOT NULL,
  PRIMARY KEY (`User_idUser`, `Data_idData`),
  INDEX `fk_Comment_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Comment_Data1_idx` (`Data_idData` ASC) VISIBLE,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comment_Data1`
    FOREIGN KEY (`Data_idData`)
    REFERENCES `mydb`.`Data` (`idData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `idRequest` INT NOT NULL,
  `Type` VARCHAR(45) NULL,
  `User_idUser` INT NOT NULL,
  `Data_idData` INT NOT NULL,
  PRIMARY KEY (`idRequest`, `User_idUser`, `Data_idData`),
  INDEX `fk_Request_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Request_Data1_idx` (`Data_idData` ASC) VISIBLE,
  CONSTRAINT `fk_Request_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_Data1`
    FOREIGN KEY (`Data_idData`)
    REFERENCES `mydb`.`Data` (`idData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `mydb`.`User` (`password`, `login`, `username`, `email`)
VALUES
('password123', 'login1', 'user1', 'user1@example.com'),
('password456', 'login2', 'user2', 'user2@example.com'),
('password789', 'login3', 'user3', 'user3@example.com');

INSERT INTO `mydb`.`Permission` (`idPermission`, `Post`, `Comment`, `Edit`, `Delete`)
VALUES
(1, 1, 1, 1, 1),
(2, 1, 1, 0, 0),
(3, 0, 0, 0, 0);

INSERT INTO `mydb`.`Role` (`RoleName`, `Permission_idPermission`, `User_idUser`)
VALUES
('Admin', 1, 1),
('User', 2, 2),
('Guest', 3, 3);

INSERT INTO `mydb`.`Tag` (`idTag`, `TagName`)
VALUES
(1, 'Technology'),
(2, 'Science'),
(3, 'Art');

INSERT INTO `mydb`.`Data` (`idData`, `Date`, `DataName`, `DataFormat`, `Tag_idTag`)
VALUES
(1, '2023-01-01 12:00:00', 'Data1', 'PDF', 1),
(2, '2023-01-02 12:00:00', 'Data2', 'DOC', 2),
(3, '2023-01-03 12:00:00', 'Data3', 'TXT', 3);

INSERT INTO `mydb`.`Comment` (`CommentText`, `User_idUser`, `Data_idData`)
VALUES
('This is a comment from user1 on data1', 1, 1),
('This is a comment from user2 on data2', 2, 2),
('This is a comment from user3 on data3', 3, 3);

INSERT INTO `mydb`.`Request` (`idRequest`, `Type`, `User_idUser`, `Data_idData`)
VALUES
(1, 'Access', 1, 1),
(2, 'Edit', 2, 2),
(3, 'Delete', 3, 3);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull-сервіс
Код серверу (Python, Flask)
### App.py
```python
from flask import Flask, request, jsonify
from config import Config
from models import db, User, Permission, Role, Tag, Data, Comment, Request

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

tables_created = False

def create_tables():
    global tables_created
    if not tables_created:
        db.create_all()
        tables_created = True


@app.before_request
def call_create_tables():
    create_tables()

@app.route('/permissions', methods=['POST'])
def create_permission():
    data = request.get_json()
    new_permission = Permission(
        Post=data['Post'],
        Comment=data['Comment'],
        Edit=data['Edit'],
        Delete=data['Delete'],
        idPermission = data["idPermission"]
    )
    db.session.add(new_permission)
    db.session.commit()
    return jsonify({"message": "Permission created"}), 201

@app.route('/permissions/<int:id>', methods=['GET'])
def get_permission(id):
    permission = Permission.query.get_or_404(id)
    return jsonify({
        "idPermission": permission.idPermission,
        "Post": permission.Post,
        "Comment": permission.Comment,
        "Edit": permission.Edit,
        "Delete": permission.Delete
    })

@app.route('/permissions/<int:id>', methods=['PUT'])
def update_permission(id):
    permission = Permission.query.get_or_404(id)
    data = request.get_json()
    permission.Post = data['Post']
    permission.Comment = data['Comment']
    permission.Edit = data['Edit']
    permission.Delete = data['Delete']
    db.session.commit()
    return jsonify({"message": "Permission updated"}), 200

@app.route('/permissions/<int:id>', methods=['DELETE'])
def delete_permission(id):
    permission = Permission.query.get_or_404(id)
    db.session.delete(permission)
    db.session.commit()
    return jsonify({"message": "Permission deleted"}), 200

@app.route('/permissions', methods=['GET'])
def get_all_permissions():
    permissions = Permission.query.all()
    permissions_data = []
    for permission in permissions:
        permission_data = {
            "idPermission": permission.idPermission,
            "Post": permission.Post,
            "Comment": permission.Comment,
            "Edit": permission.Edit,
            "Delete": permission.Delete
        }
        permissions_data.append(permission_data)
    return jsonify(permissions_data)

@app.route('/permissions/<int:id>', methods=['PATCH'])
def partial_update_permission(id):
    permission = Permission.query.get_or_404(id)
    data = request.get_json()
    if 'Post' in data:
        permission.Post = data['Post']
    if 'Comment' in data:
        permission.Comment = data['Comment']
    if 'Edit' in data:
        permission.Edit = data['Edit']
    if 'Delete' in data:
        permission.Delete = data['Delete']
    db.session.commit()
    return jsonify({"message": "Permission updated partially"}), 200

if __name__ == 'main':
    app.run(debug=True)
```
### Config.py
```python
import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:12345678@localhost/mydb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```
### Models.py
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    idUser = db.Column(db.Integer, primary_key=True, autoincrement=True)
    password = db.Column(db.String(45), nullable=False)
    login = db.Column(db.String(45), unique=True, nullable=False)
    username = db.Column(db.String(45), unique=True, nullable=False)
    email = db.Column(db.String(45), unique=True, nullable=False)
    roles = db.relationship('Role', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    requests = db.relationship('Request', backref='user', lazy=True)

class Permission(db.Model):
    __tablename__ = 'Permission'
    idPermission = db.Column(db.Integer, primary_key=True)
    Post = db.Column(db.Boolean, nullable=True)
    Comment = db.Column(db.Boolean, nullable=True)
    Edit = db.Column(db.Boolean, nullable=True)
    Delete = db.Column(db.Boolean, nullable=True)
    roles = db.relationship('Role', backref='permission', lazy=True)

class Role(db.Model):
    __tablename__ = 'Role'
    idRole = db.Column(db.Integer, primary_key=True, autoincrement=True)
    RoleName = db.Column(db.String(45), nullable=True)
    Permission_idPermission = db.Column(db.Integer, db.ForeignKey('Permission.idPermission'), nullable=False)
    User_idUser = db.Column(db.Integer, db.ForeignKey('User.idUser'), nullable=False)

class Tag(db.Model):
    __tablename__ = 'Tag'
    idTag = db.Column(db.Integer, primary_key=True)
    TagName = db.Column(db.String(45), nullable=True)
    data = db.relationship('Data', backref='tag', lazy=True)

class Data(db.Model):
    __tablename__ = 'Data'
    idData = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Date = db.Column(db.DateTime, nullable=True)
    DataName = db.Column(db.String(45), nullable=True)
    DataFormat = db.Column(db.String(45), nullable=True)
    Tag_idTag = db.Column(db.Integer, db.ForeignKey('Tag.idTag'), nullable=False)
    comments = db.relationship('Comment', backref='data', lazy=True)
    requests = db.relationship('Request', backref='data', lazy=True)

class Comment(db.Model):
    __tablename__ = 'Comment'
    CommentText = db.Column(db.Text, nullable=False)
    User_idUser = db.Column(db.Integer, db.ForeignKey('User.idUser'), primary_key=True)
    Data_idData = db.Column(db.Integer, db.ForeignKey('Data.idData'), primary_key=True)

class Request(db.Model):
    __tablename__ = 'Request'
    idRequest = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Type = db.Column(db.String(45), nullable=True)
    User_idUser = db.Column(db.Integer, db.ForeignKey('User.idUser'), nullable=False)
    Data_idData = db.Column(db.Integer, db.ForeignKey('Data.idData'), nullable=False)
```

