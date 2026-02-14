const envelope = document.getElementById('envelope');

// Lắng nghe sự kiện click vào bao thư
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// Hàm xử lý nút nhận quà
function openGift(event) {
    // Ngăn chặn sự kiện click lan ra ngoài (không làm đóng bao thư)
    event.stopPropagation();
    
    // Bạn có thể thay đổi nội dung thông báo hoặc chuyển hướng tại đây
    alert("✨ Chúc mừng! Bạn nhận được một cái ôm từ hệ thống! 🤗\nMã quà tặng: HAPPY2026");
    
    // Ví dụ: Chuyển hướng đến trang khác
    // window.location.href = "https://your-gift-link.com";
}
