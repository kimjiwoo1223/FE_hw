function updateCountdown() {
    const now = new Date();

    // 운영시간 설정 
    const openTime = new Date();
    openTime.setHours(10, 0, 0, 0);

    const closeTime = new Date();
    closeTime.setHours(14, 33, 0, 0);

    const message = document.getElementById("message");
    const timer = document.getElementById("timer");

    let timedifference;

    if (now < openTime) {
        // 운영 전
        timedifference = openTime - now;
        message.textContent = "금일 오픈까지 남은 시간";
        timer.textContent = formatCountdown(timedifference); 
    } else if (now >= openTime && now <= closeTime) {
        // 운영 중
        timedifference = closeTime - now;
        message.textContent = "금일 마감까지 남은 시간";
        timer.textContent = formatCountdown(timedifference);  
    } else {
        // 마감 후
        message.textContent = "금일 마감";
        timer.textContent = "";  
    }
}
    
function formatCountdown(ms) {
    const totalSeconds = Math.floor(ms / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    
    return (
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0')
    );
}


setInterval(updateCountdown, 1000);

updateCountdown();