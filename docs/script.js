document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript файл успішно підключений і готовий до роботи.');

    const colors = [
        '#590d22', '#800f2f', '#a4133c', '#c9184a', '#ff4d6d',
        '#ff758f', '#ff8fa3', '#ffb3c1', '#ffccd5', '#fff0f3'
    ];
    const mosaicContainer = document.createElement('div');
    mosaicContainer.classList.add('mosaic');

    const numCells = Math.ceil(document.documentElement.scrollHeight / 55) * Math.ceil(document.documentElement.scrollWidth / 55);

    for (let i = 0; i < numCells; i++) {
        const cell = document.createElement('div');
        cell.style.backgroundColor = colors[i % colors.length];
        mosaicContainer.appendChild(cell);
    }

    document.body.appendChild(mosaicContainer);
});
