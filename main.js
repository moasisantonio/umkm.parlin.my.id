// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if(navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // WhatsApp Auto Message
    const waButtons = document.querySelectorAll('[href*="wa.me"]');
    waButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if(!this.getAttribute('href').includes('text=')) {
                e.preventDefault();
                const message = encodeURIComponent(
                    "Halo AIUMKM.ID,\n" +
                    "Saya tertarik dengan layanan konsultan AI untuk UMKM.\n" +
                    "Bisa konsultasi gratis 30 menit?\n\n" +
                    "Nama:\nUsaha:\nPermasalahan:"
                );
                window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
            }
        });
    });
    
    // Simple ROI Calculator
    const roiCalculator = document.createElement('div');
    roiCalculator.className = 'roi-calculator';
    roiCalculator.innerHTML = `
        <div class="roi-box">
            <h3>Hitung Penghematan Waktu Anda</h3>
            <div class="roi-input">
                <label>Jam kerja/admin per hari:</label>
                <input type="range" min="1" max="8" value="3" class="time-slider">
                <span class="time-value">3 jam</span>
            </div>
            <div class="roi-result">
                <p>Dengan AI, Anda bisa hemat: <strong>2 jam/hari</strong></p>
                <p>≈ <strong>40 jam/bulan</strong> untuk fokus berkembang!</p>
            </div>
        </div>
    `;
    // Tambah di main.js
const chatbotHTML = `
<div class="chatbot-widget">
    <div class="chatbot-header">
        <span>🤖 Tanya AI Assistant</span>
        <button class="chatbot-close">&times;</button>
    </div>
    <div class="chatbot-body">
        <div class="chat-message bot">
            Halo! Saya AI Assistant AIUMKM. Ada yang bisa saya bantu?
        </div>
    </div>
    <div class="chatbot-input">
        <input type="text" placeholder="Tulis pertanyaan...">
        <button>Kirim</button>
    </div>
</div>
<button class="chatbot-toggle">💬 Tanya AI</button>
`;

    // Insert after services section
    const servicesSection = document.querySelector('.services');
    if(servicesSection) {
        servicesSection.appendChild(roiCalculator);
        
        const slider = roiCalculator.querySelector('.time-slider');
        const valueDisplay = roiCalculator.querySelector('.time-value');
        const resultDisplay = roiCalculator.querySelector('.roi-result');
        
        slider.addEventListener('input', function() {
            const hours = parseInt(this.value);
            valueDisplay.textContent = hours + ' jam';
            
            const savedHours = Math.floor(hours * 0.67);
            resultDisplay.innerHTML = `
                <p>Dengan AI, Anda bisa hemat: <strong>${savedHours} jam/hari</strong></p>
                <p>≈ <strong>${savedHours * 20} jam/bulan</strong> untuk fokus berkembang!</p>
            `;
        });
    }
});