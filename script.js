document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    const resetButton = document.getElementById('reset-button');
    const gridSize = 16; // 16x16 сетка
    
    // Функция для создания сетки
    function createGrid() {
        // Очищаем контейнер перед созданием новой сетки
        gridContainer.innerHTML = '';
        
        // Создаем 256 квадратов (16x16)
        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            
            // Добавляем обработчик события для изменения цвета при клике
            square.addEventListener('click', function() {
                this.style.backgroundColor = getRandomColor();
            });
            
            gridContainer.appendChild(square);
        }
    }
    
    // Функция для генерации случайного цвета
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Обработчик события для кнопки сброса
    resetButton.addEventListener('click', function() {
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach(square => {
            square.style.backgroundColor = '';
        });
    });
    
    // Создаем сетку при загрузке страницы
    createGrid();
    
    // Для отладки: вывод в консоль
    console.log('Сетка создана успешно!');
    console.log(`Количество элементов: ${gridContainer.children.length}`);
});