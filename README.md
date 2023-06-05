# URL shortener

![image](https://github.com/yanyanyaa/URL_shortener/blob/d5630dc47667a778a71c6c11ce50b01c19ab974a/image.png
)

## 介紹 (About)
這是一個可以產生短網址的網站

## 功能列表（Features）
- 輸入欲縮短的網址，按下 submit 後可產生一組短網址
- 若輸入的網址已存在於資料庫，會顯示相同的短網址
- 按下 copy 鈕，即可一鍵複製短網址

## 環境建置與需求 (Prerequisites)
- Node.js
- Express @4.18.2
- Express-handlebars @3.0.0
- MongoDB
- mongoose @5.13.17
- body-parser @1.20.2

## 安裝(Installation)

1. 請先確認有安裝 node.js, npm 與 nodemon

2. 打開終端機，clone 此專案至本地
```
git clone https://github.com/yanyanyaa/URL_shortener.git
```

3. 在終端機上安裝 express
```
npm install express@4.18.2
```

4. 在終端機上安裝 express-handlebars
```
npm i express-handlebars@3.0.0
```

5. 在終端機上安裝 mongoose @5.13.17
```
npm i npm i mongoose@5.13.17
```

6. 在專案資料夾內新增一個.env檔案，並輸入 MongoDB 你的連線字串
```
MONGODB_URI = "<你的連線字串>"
```

7. 在終端機上啟動伺服器
```
npm run dev
```

8. 當終端機出現以下字樣，表示伺服器已成功啟動
```
App is running on http://localhost:3000
```