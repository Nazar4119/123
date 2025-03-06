document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript файл успішно підключений і готовий до роботи.');

    const colors = [
        '#590d22', '#800f2f', '#a4133c', '#c9184a', '#ff4d6d',
        '#ff758f', '#ff8fa3'
    ];
    const mosaicContainer = document.createElement('div');
    mosaicContainer.classList.add('mosaic');

    const numCells = Math.ceil(document.documentElement.scrollHeight / 55) * Math.ceil(document.documentElement.scrollWidth / 55);

    for (let i = 0; i < numCells; i++) {
        const cell = document.createElement('div');
        cell.style.backgroundColor = colors[i % colors.length];
        cell.style.width = '100%';
        cell.style.height = '50px'; // Зменшення висоти в 2 рази
        if (i === 1 || i === 9) { // Змінити колір 2-го та 10-го квадрата
            cell.classList.add('bright-yellow');
        }
        mosaicContainer.appendChild(cell);
    }

    document.body.appendChild(mosaicContainer);
});
