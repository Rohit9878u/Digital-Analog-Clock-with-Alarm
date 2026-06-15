// Clock Application Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital & Analog Clock application initialized successfully.');

    // Clock Elements
    const digitalClockEl = document.getElementById('digital-clock');
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    // Function to update both Digital and Analog Clocks
    function updateClocks() {
        const now = new Date();

        // 1. Digital Clock Update
        if (digitalClockEl) {
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // Convert to 12-hour format
            hours = hours % 12;
            hours = hours ? hours : 12; // 0 hour should display as 12
            const hoursStr = String(hours).padStart(2, '0');

            // Update display text
            digitalClockEl.textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
        }

        // 2. Analog Clock Update
        const secondsVal = now.getSeconds();
        const minutesVal = now.getMinutes();
        const hoursVal = now.getHours();

        // Calculate degrees for hands rotation
        const secondsDeg = (secondsVal / 60) * 360;
        const minutesDeg = ((minutesVal + secondsVal / 60) / 60) * 360;
        const hoursDeg = (((hoursVal % 12) + minutesVal / 60) / 12) * 360;

        if (hourHand) hourHand.style.transform = `rotate(${hoursDeg}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        if (secondHand) secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    }

    // Initialize clock immediately and set interval
    updateClocks();
    setInterval(updateClocks, 1000);
});
