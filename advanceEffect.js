document.addEventListener("DOMContentLoaded", function() {
    const text = "Developed by JukisYuri";
    const typingEffect = document.getElementById('typing-effect');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150); // Tốc độ đánh máy
        } else {
            setTimeout(erase, 2000); // Giữ lại đoạn text một thời gian rồi xóa
        }
    }

    function erase() {
        if (index > 0) {
            typingEffect.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 100); // Tốc độ xóa
        } else {
            setTimeout(type, 1000); // Sau khi xóa hết, bắt đầu lại
        }
    }

    // Khởi chạy
    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.createElement('div');
    rainContainer.style.position = 'absolute';
    rainContainer.style.top = '0';
    rainContainer.style.left = '0';
    rainContainer.style.width = '100%';
    rainContainer.style.height = '100%';
    rainContainer.style.overflow = 'hidden';
    rainContainer.style.pointerEvents = 'none';
    
    document.body.appendChild(rainContainer);

    let rainCount = 0;  
    const maxRainDrops = 100;  
    
    function createRainDrop() {
        if (rainCount < maxRainDrops) { 
            const rainDrop = document.createElement('div');
            rainDrop.className = 'rain';
            rainDrop.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên từ trái sang phải
            rainDrop.style.animationDuration = Math.random() * 0.5 + 0.5 + 's'; // Thay đổi tốc độ ngẫu nhiên
            rainContainer.appendChild(rainDrop);
            rainCount++;  // Tăng biến đếm số giọt mưa
            
            // Xóa giọt mưa sau khi nó rơi xuống và giảm biến đếm
            rainDrop.addEventListener('animationend', () => {
                rainDrop.remove();
                rainCount--;
            });
        }
    }
    setInterval(createRainDrop, 100); // Tạo giọt mưa mỗi 100ms
});
function openModal() {
    document.getElementById("login-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("login-modal").style.display = "none";
}

document.querySelector(".close").onclick = closeModal;

window.onclick = function(event) {
    const modal = document.getElementById("login-modal");
    if (event.target === modal) {
        closeModal();
    }
}

// Thêm sự kiện click cho nút "Get Yours Now"
document.getElementById("get-yours-btn").onclick = openModal;

// Lấy các phần tử cần thiết
const loginModal = document.getElementById("login-modal");
const navbar = document.querySelector(".navbar"); // Sửa: Đảm bảo bạn đang lấy đúng navbar
const getYoursBtn = document.getElementById("get-yours-btn");
const closeBtn = document.querySelector(".close");

// Hàm để ẩn navbar với hiệu ứng fade
function hideNavbar() {
    navbar.classList.add("hidden");
}

// Hàm để hiện navbar với hiệu ứng fade
function showNavbar() {
    navbar.classList.remove("hidden");
}

// Hiện modal khi nhấn nút "Get yours now"
getYoursBtn.onclick = function() {
    if (loginModal.style.display === "block") {
        // Nếu modal đã mở, không làm gì cả
        return;
    }
    loginModal.style.display = "block";
    hideNavbar(); // Ẩn navbar khi mở modal
}

// Đóng modal khi nhấn nút đóng
closeBtn.onclick = function() {
    loginModal.style.display = "none";
    showNavbar(); // Hiện navbar khi đóng modal
}

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
        showNavbar(); // Hiện navbar khi đóng modal
    }
}



