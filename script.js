document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    const resetButton = document.getElementById('reset-button');
    const randomColorButton = document.getElementById('random-color-button');
    const changeGridBtn = document.getElementById('change-grid-btn');
    const gridSizeInfo = document.getElementById('grid-size-info');
    
    let currentColor = '#333333';
    let gridSize = 16; // Начальный размер сетки
    
    // Функция для создания сетки
    function createGrid(size) {
        // Очищаем контейнер перед созданием новой сетки
        gridContainer.innerHTML = '';
        
        // Устанавливаем новый размер сетки
        gridSize = size;
        gridSizeInfo.textContent = `${size}x${size}`;
        
        // Вычисляем размер каждого квадрата
        const squareSize = 960 / size;
        
        // Создаем квадраты
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            
            // Устанавливаем размер квадрата
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            
            // Добавляем обработчик события для изменения цвета при наведении
            square.addEventListener('mouseover', function() {
                this.style.backgroundColor = currentColor;
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
    
    // Обработчик события для кнопки случайного цвета
    randomColorButton.addEventListener('click', function() {
        currentColor = getRandomColor();
    });
    
    // Обработчик события для кнопки изменения размера сетки
    changeGridBtn.addEventListener('click', function() {
        let newSize = prompt('Введите количество квадратов на сторону (максимум 100):', gridSize);
        
        // Проверяем введенное значение
        if (newSize === null) return; // Пользователь нажал "Отмена"
        
        newSize = parseInt(newSize);
        
        if (isNaN(newSize) || newSize <= 0) {
            alert('Пожалуйста, введите положительное число.');
            return;
        }
        
        if (newSize > 100) {
            alert('Максимальное количество квадратов на сторону: 100.');
            return;
        }
        
        // Создаем новую сетку
        createGrid(newSize);
    });
    
    // Создаем начальную сетку при загрузке страницы
    createGrid(gridSize);
    
    // Для отладки: вывод в консоль
    console.log('Сетка создана успешно!');
});