var damage = 25;
var strongDamage = 40;
var healValue = 300;

attackBtn.onclick = function fun() {
    applyMonsterDamage(damage);
    applyPlayerDamage(damage);
} 
strongAttackBtn.onclick = function fun() {
    applyMonsterDamage(strongDamage);
    applyPlayerDamage(strongDamage);
}
healBtn.onclick = function fun() {
    removeBonusLife();
    increasePlayerHealth(healValue);
    applyPlayerDamage(damage);
}
logBtn.onclick = function fun() {
    console.log('Monster',monsterHealthBar.value);
    console.log('Player',playerHealthBar.value);
    if (monsterHealthBar.value == playerHealthBar.value) {
        alert('Draw!');
    } else {
        if (monsterHealthBar.value > playerHealthBar.value) {
            alert('The monster won!');
        } else {
            alert('You won!');
        }
    }
}
