const quotes = [
    "Ketika aku bersamamu, aku merasakan dunia berhenti hanya untuk kita berdua.",
    "Cinta itu adalah kamu dan aku, dalam satu tarikan napas, dalam satu ketukan hati.",
    "Di dalam senyummu, aku menemukan harapan yang tidak pernah kutemukan di tempat lain.",
    "Aku mencintaimu bukan karena siapa dirimu, tapi karena siapa aku ketika bersamamu.",
    "Kehadiranmu adalah cahaya yang menerangi setiap sudut hatiku yang gelap.",
    "Aku ingin mencintaimu tanpa henti, seperti angin yang tak pernah berhenti berhembus.",
    "Cinta kita adalah cerita indah yang tidak pernah ingin aku akhiri.",
    "Dalam pelukanmu, aku menemukan rumah yang tak pernah kutemukan di tempat lain.",
    "Setiap detik bersamamu adalah momen yang ingin kuabadikan di dalam jantung waktu.",
    "Kamu adalah bait-bait cinta yang selalu ingin kubacakan di setiap malam yang sunyi.",
    "Aku memilihmu, berulang kali, tanpa keraguan, tanpa penyesalan, hanya cinta yang tulus.",
    "Setiap kali aku menatap matamu, aku jatuh cinta lebih dalam dari sebelumnya.",
    "Kita tidak membutuhkan kata-kata untuk saling memahami, karena hati kita sudah berbicara satu sama lain.",
    "Jika cinta adalah perjalanan, aku ingin menghabiskan sisa hidupku menempuhnya bersamamu.",
    "Hatiku tidak pernah merasakan kedamaian sebelum aku bertemu denganmu.",
    "Ketika kita berdua bersama, dunia terasa lebih ringan dan bahagia.",
    "Dalam senyapnya malam, aku hanya memikirkanmu, dan itu sudah cukup untuk membuatku tersenyum.",
    "Cinta kita adalah irama yang indah, melodi yang menari di antara setiap detak jantungku.",
    "Kehadiranmu adalah bukti bahwa cinta sejati itu ada, nyata, dan indah.",
    "Aku tidak membutuhkan surga, karena aku sudah menemukannya di dalam dirimu."
];


const quoteElement = document.getElementById('quote');
const button = document.getElementById('generateQuote');

button.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.style.opacity = '0';
    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = '1';
    }, 500);
});

// Kontrol Play/Pause Musik
const music = document.getElementById('loveMusic');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        playPauseBtn.textContent = 'Jeda Musik';
    } else {
        music.pause();
        playPauseBtn.textContent = 'Putar Musik';
    }
});
