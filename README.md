# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :tweets
- has_many :comments

## Tweets テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| title  | string | null: false |
| text   | text   | null: false |
| height | string |             |
| weight | string |             |


### Association

- belongs_to :user
- has_many :comments

## comment テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| comment | text       | null: false                    |
| user    | references | null: false, foreign_key: true |
| tweet   | references | null: false, foreign_key: true |

### Association

- belongs_to :tweet
- belongs_to :user

## calender テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| memo    | string     |                                |
| user    | references | null: false, foreign_key: true |

### Association

- belongs_to :user