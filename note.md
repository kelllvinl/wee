```
npm i ts-node-dev

npm i express @types/express

npm install socket.io @types/socket.io

npm install pg @types/pg dotenv

npm install multer @types/multer

\\\-----login
npm install bcryptjs @types/bcryptjs


--------
Google Login 😊
\\  search google developer console

tecky-project2-202110
專案名稱 *
專案 ID： tecky-project2-202110。 專案 ID 設定完成後即無法變更。 

User-type ---外部
填個名/兩個郵箱
Tecky Project2：Tecky Project2
使用者支援電子郵件 *：gmail
直接保存落去
“OAuth 同意畫面
使用者類型
外部
應用程式名稱
Tecky Project2
支援電子郵件
elaine535268227@gmail.com”

憑證 ---> 建立憑證---> OAuth用戶端ID ==網頁應用程式----
--> 已授權的 JavaScript 來源:新增URI == http://localhost:8080 -----
---> 已授權的重新導向 URI == http://localhost:8080/login/google
建立！！
Elaine
用戶端ID
674909659345-nar6vf6o13d3pk9bvt3ad7oi3lc7hd58.apps.googleusercontent.com
用戶端密碼
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
(每個同學都可以唔一樣，自己嘅一個)

如果有問題就試下
改已授權的重新導向 URI ==http://localhost:8080/connect/google/callback



npm install grant  dotenv @types/dotenv

<!-- 呢句冇用，要用新嘅👇npm install node-fetch @types/node-fetch -->
npm i node-fetch@2.x @types/node-fetch@2.x
```

```
-- psql -U elaine1515 -W -d wee

-- SELECT * FROM member;
-- here is test count-----
INSERT INTO member (username, password) VALUES ('admin01', '123');
INSERT INTO member (username, password) VALUES ('admin02', '123');
INSERT INTO member (username, password) VALUES ('admin03', '123');
INSERT INTO member (profile_pic) VALUES ('profile_pic.png') where username = 'a01';
-UPDATE member SET profile_pic= 'profile_pic.png' where username = 'a01';
ALTER TABLE member ADD COLUMN day_of_bnovisa date;
```
```
-- SELECT * FROM category
-- SELECT * FROM marquee
-- SELECT * FROM blog
-- SELECT * FROM calendar
-- SELECT * FROM theme
-- SELECT * FROM secondhand
```

// change env. file


##2021-10-21
elaine task
 [X] registration page update: user password double check;
 [ ] registration username不能重複
 [ ] user 打錯password 提示
 [ ] LogOUT function
 [ ] Daily Enlish
 [ ] 加一版，user可以更改自己嘅資料
