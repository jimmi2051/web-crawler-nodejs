# web-crawler-nodejs
--- Web crawler ----
Yêu cầu: 
1) Đã cài đặt Nodejs v11.10.0
2) Đã cài đặt Npm 6.7.0
------------------------------------------
Hướng dẫn sử dụng: ( Hệ điều hành Linux Ubuntu 18.04 )

B1) Tải source code - https://github.com/jimmi2051/web-crawler-nodejs.

B2) Sử dụng Terminal và di chuyển tới folder source vừa tải xuống. 

B3) Gõ dòng lệnh: npm init # khởi tạo project nodejs và tạo file package.json lưu trữ cấu hình

B4) Cài đặt các thư viện cần thiết.

    1. Puppeteer - version 1.12.2
        Chức năng: điều khiển Chrome headless browser thông qua code
        Lệnh cài đặt: npm install --save puppeteer
    2. Image-downloader - version 3.4.2
        Chức năng: hỗ trợ tải hình ảnh thông qua đường dẫn ảnh
        Lệnh cài đặt: npm install --save image-downloader
		
B5) Thực hiện crawler dữ liệu
    
    Gõ dòng lệnh: node index.js
