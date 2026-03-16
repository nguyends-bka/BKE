const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'database.xlsx');

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public'))); // Phục vụ Frontend từ thư mục public

// Hàm hỗ trợ: Đọc dữ liệu từ Excel
function readDatabase() {
    if (!fs.existsSync(DB_FILE)) {
        return []; // Trả về mảng rỗng nếu chưa có file
    }
    try {
        const workbook = XLSX.readFile(DB_FILE);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    } catch (error) {
        console.error("Lỗi đọc file Excel:", error);
        return [];
    }
}

// Hàm hỗ trợ: Ghi dữ liệu vào Excel
function writeDatabase(data) {
    try {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "TuVung");
        XLSX.writeFile(workbook, DB_FILE);
        return true;
    } catch (error) {
        console.error("Lỗi ghi file Excel:", error);
        return false;
    }
}

// API: Lấy toàn bộ từ vựng
app.get('/api/words', (req, res) => {
    const words = readDatabase();
    res.json(words);
});

// API: Cập nhật (Ghi đè) toàn bộ từ vựng
app.post('/api/words', (req, res) => {
    const data = req.body;
    if (Array.isArray(data)) {
        const success = writeDatabase(data);
        if (success) {
            res.json({ message: "Đã lưu vào file Excel thành công!" });
        } else {
            res.status(500).json({ message: "Lỗi khi ghi file Excel" });
        }
    } else {
        res.status(400).json({ message: "Dữ liệu không hợp lệ" });
    }
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
    console.log(`Frontend đang phục vụ file public/index.html`);
});