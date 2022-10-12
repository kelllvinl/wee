-- create database
CREATE DATABASE "wee";

-- create user (skip)
CREATE USER your user name here with PASSWORD 'your password here' SUPERUSER;

-- create document (.env)
DB_NAME=wee
DB_USERNAME= --your user name here
DB_PASSWORD= --your password here

--> 1. member
-- psql -U elaine1515 -W -d wee
-- create tables 
----------elaine add one more column:entry_date DATE / created_at /updated_at
-- SELECT * FROM member;

-- -ALTER TABLE member ADD COLUMN quiz_scores VARCHAR(90);
CREATE TABLE member(
    id SERIAL primary key,
    username VARCHAR(25) not null unique,
    password VARCHAR(8) not null,
    day_of_birth DATE,
    day_of_bnovisa DATE,
    email TEXT,
    profile_pic TEXT,
    entry_date DATE,
    quiz_scores VARCHAR(90),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


-- category
CREATE TABLE category(
    category_id SERIAL primary key,
    name TEXT not null
);

-- marquee
CREATE TABLE marquee(
    content VARCHAR
);

-- blog
CREATE TABLE blog(
    blog_id SERIAL primary key,
    username VARCHAR(25) not null,
    subtitle TEXT not null,
    content TEXT not null,
    blog_img TEXT not null,
    post_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    category_id VARCHAR(8) not null
);

-- calendar
CREATE TABLE calendar(
    date TIMESTAMP,
    event text,
    time TIMESTAMP
);

-- theme
CREATE TABLE theme(
    target_id SERIAL primary key,
    name TEXT,
    theme_img TEXT,
    description TEXT,
    category_id VARCHAR(25),
    link TEXT
);

-- secondhand 
CREATE TABLE secondhand(
    secondhand_id SERIAL primary key,
    username VARCHAR(25),
    secondhand_name TEXT not null,
    price VARCHAR,
    description VARCHAR(255),
    secondhand_img TEXT,
    update_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    category_id VARCHAR(8) not null
);

--shoplist
CREATE TABLE shop(
    shop_id SERIAL primary key,
    shop_name TEXT,
    shop_address TEXT,
    opening_hour TEXT,
    shop_tel TEXT,
    shop_img TEXT,
    category_id VARCHAR(25) not null,
    remarks TEXT
);

-- lifeinUKquiz
-- 1.
CREATE TABLE quiz_question(
    question_id SERIAL primary key,
    question TEXT
);
-- 2.
CREATE TABLE quiz_answer(
    question_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES life_in_uk_quiz_question (question_id),
    answer_id SERIAL primary key,
    answer TEXT,
    currect_ans BOOLEAN
);

CREATE TABLE todo_list(
    todo_id SERIAL primary key,
    todo TEXT,
    FOREIGN KEY (user_id) REFERENCES member (id),
    user_id INTEGER
);

-- WTF?
-- INSERT INTO users (username, password) VALUES ('jason', 'jason');
-- INSERT INTO users (username, password) VALUES ('peter', 'peter');
-- INSERT INTO users (username, password) VALUES ('mary', 'mary');

-- INSERT INTO memos (content) VALUES ('hello, world 1');
-- INSERT INTO memos (content) VALUES ('hello, world 2');
-- INSERT INTO memos (content) VALUES ('hello, world 3');

-- CREATE TABLE likes (
--     id SERIAL PRIMARY KEY,
--     user_id integer,
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     memo_id integer,
--     FOREIGN KEY (memo_id) REFERENCEs memos(id)
-- );

-- INSERT INTO likes (user_id, memo_id) VALUES (1, 1);
-- INSERT INTO likes (user_id, memo_id) VALUES (1, 2);
-- INSERT INTO likes (user_id, memo_id) VALUES (3, 1);

-- JOIN x 2
-- 1st users JOIN likes
-- 2nd ?? JOIN memos
-- SELECT users.*, memos.* FROM users
-- LEFT JOIN likes
-- ON users.id = likes.user_id
-- LEFT JOIN memos
-- ON likes.memo_id = memos.id;
