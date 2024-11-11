function generateColor() {
    
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        document.getElementsByClassName('color-box')[0].style.backgroundColor = color;
        document.getElementById('hex-color').innerHTML = color;
    }
    return color;
}