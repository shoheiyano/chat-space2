# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string｜null: false|
|email|string|null: false|

### Association
- has_many :messages
- has_many :groups though: users_groups
- has_many :users_groups

## messagesテーブル

|Column|Type|Option|
|------|----|------|
|text|string|null: false|
|image|string| |
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group 

## groupsテーブル

|Column|Tyoe|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :message
- has_many :users, though: users_groups
- has_many :users_groups

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|reference|null: false,foreign_key|
|group_id|reference|null: false,foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group