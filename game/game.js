let fuel = 90; // Start at 100%
const drainRate = 0.05; // How fast the bar empty naturally

function update() {
    if (!gameActive) return;

    // 1. Natural Drain
    fuel -= drainRate;
    
    // 2. Clamp fuel between 0 and 100
    if (fuel > 100) fuel = 100;
    if (fuel <= 0) {
        fuel = 0;
        gameOver();
    }

    // Update UI Bar
    const bar = document.getElementById('energyBar');
    bar.style.width = fuel + "%";
    
    // Color feedback: Green if high, Red if low
    bar.style.backgroundColor = fuel > 30 ? "#4CAF50" : "#FF5252";
}

// Inside your handleInput detection:
if (dist < v.radius + 20) {
    if (v.type === 'whole-food') {
        fuel += 15; // Recharge!
    } else {
        fuel -= 10; // The "sugar crash" drop
        triggerShake(); // Visual feedback
    }
    v.reset();
}