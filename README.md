# 🎓 Ứng Dụng Tự Học Từ Vựng Cá Nhân Hóa (Vocabulary Learning App)

Đây là ứng dụng Web giúp bạn **quản lý, lưu trữ và luyện tập từ vựng
tiếng Anh theo từng chủ đề**.\
Ứng dụng tích hợp các trò chơi (**Flashcard, Ghép từ, Điền từ, Trắc
nghiệm**) và sử dụng trực tiếp file **Excel (.xlsx)** làm **Cơ sở dữ
liệu (Database)** để bạn dễ dàng quản lý.

------------------------------------------------------------------------

# 📁 Cấu Trúc Thư Mục Dự Án

Hãy đảm bảo thư mục dự án của bạn (ví dụ: `E:\BKE`) có cấu trúc chính
xác như sau:

    BKE/
     ├── server.js              # File mã nguồn Backend (Node.js)
     ├── database.xlsx          # File dữ liệu từ vựng (Sẽ tự động sinh ra khi bạn lưu từ)
     ├── package.json           # File quản lý thư viện của Node.js
     └── public/
          └── index.html        # File mã nguồn Frontend (Giao diện web)

------------------------------------------------------------------------

# ⚙️ Hướng Dẫn Cài Đặt Môi Trường

## Bước 1: Tải và cài đặt Node.js

Ứng dụng sử dụng **Node.js** để chạy máy chủ (Backend) đọc/ghi file
Excel.

1.  Truy cập trang chủ:\
    👉 https://nodejs.org/

2.  Tải và cài đặt phiên bản **LTS (Recommended For Most Users)**.

3.  Bấm **Next** liên tục để cài đặt như các phần mềm thông thường.

------------------------------------------------------------------------

## Bước 2: Cài đặt thư viện (Dependencies)

1.  Mở thư mục dự án của bạn:

```{=html}
<!-- -->
```
    E:\BKE

2.  Mở cửa sổ dòng lệnh (**Terminal / Command Prompt / PowerShell**) tại
    thư mục này.

💡 **Mẹo trên Windows:**\
Click vào thanh đường dẫn thư mục ở phía trên cùng → gõ `cmd` → nhấn
**Enter**.

3.  Chạy lần lượt 2 dòng lệnh sau:

### Khởi tạo dự án Node.js

``` bash
npm init -y
```

### Cài đặt các thư viện cần thiết

``` bash
npm install express cors xlsx
```

Các thư viện gồm:

-   **Express** -- tạo server backend
-   **CORS** -- cho phép frontend truy cập API
-   **XLSX** -- đọc và ghi file Excel

------------------------------------------------------------------------

# 🚀 Cách Chạy Ứng Dụng

Mỗi khi muốn học từ vựng, bạn làm theo **2 bước đơn giản** sau:

## Bước 1: Khởi động Server (Backend)

Mở Terminal tại thư mục **BKE** và chạy lệnh:

``` bash
node server.js
```

Nếu Terminal hiện dòng:

    Server đang chạy tại: http://localhost:3000

➡️ Bạn đã chạy server thành công.

------------------------------------------------------------------------

## Bước 2: Mở giao diện trên trình duyệt (Frontend)

Mở trình duyệt:

-   Google Chrome
-   Cốc Cốc
-   Microsoft Edge

Truy cập:

👉 **http://localhost:3000**

------------------------------------------------------------------------

# 💡 Các Tính Năng Nổi Bật

## 1️⃣ Quản lý từ vựng bằng Excel

-   **Tải file mẫu**\
    Nhấn **"Tải file mẫu nhập Excel"** để lấy form chuẩn.

-   **Nhập (Import)**\
    Tải file Excel lên và đặt tên **"Chủ đề"** cho nhóm từ vựng.

-   **Xuất (Export)**\
    Cho phép tải xuống:

    -   toàn bộ từ vựng
    -   hoặc theo **từng chủ đề riêng biệt**

------------------------------------------------------------------------

## 2️⃣ Quản lý linh hoạt

-   Phân loại từ vựng theo **từng thư mục (Chủ đề)**.
-   Tự động tạo nhóm **"Từ khó thuộc"**.

Khi đang học:

⭐ Nhấn **biểu tượng Ngôi sao** trên từ vựng → từ đó sẽ được đưa vào thư
mục **Từ khó** để ôn tập riêng.

------------------------------------------------------------------------

## 3️⃣ Bốn chế độ luyện tập (Games)

Ứng dụng hỗ trợ **âm thanh đọc tiếng Anh chuẩn**.

### 🃏 Flashcard (Thẻ ghi nhớ)

-   Lật thẻ hai mặt
-   Giúp ghi nhớ nghĩa từ

### 🎮 Matching (Ghép từ)

-   Tìm cặp **Tiếng Anh -- Tiếng Việt** tương ứng

### ⌨️ Typing (Điền từ)

-   Luyện **Nghe -- Gõ (Dictation)**
-   Có nút **Gợi ý** hé lộ từng chữ cái
-   Hỗ trợ **ấn Enter để kiểm tra**

### 📝 Quiz (Trắc nghiệm)

-   Chọn **đáp án đúng trong 4 phương án**

------------------------------------------------------------------------

# ⚠️ Lưu Ý Quan Trọng

❗ **Không bao giờ tắt cửa sổ Terminal khi đang sử dụng ứng dụng.**

Nếu bạn tắt Terminal:

-   Server sẽ bị **ngắt**
-   Bạn **không thể thêm từ hoặc tải dữ liệu mới**

------------------------------------------------------------------------

# 💾 Lưu Trữ Dữ Liệu

Toàn bộ dữ liệu bạn nhập trên Web sẽ được **Backend tự động lưu trực
tiếp vào file:**

    database.xlsx

File này nằm **cùng thư mục với `server.js`** trong thư mục **BKE**.

📌 Đây chính là **"tài sản dữ liệu" của bạn**, hãy sao lưu và lưu trữ
cẩn thận.
