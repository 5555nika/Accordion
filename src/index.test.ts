import { it, expect } from 'vitest';
import { initAccordion } from './index';

it('переключает класс active при клике', () => {
    // 1. Создаем минимальный HTML
    document.body.innerHTML = `
        <h3 data-modal id="btn">Заголовок</h3>
        <div id="content">Контент</div>
    `;

    // 2. Подключаем аккордеон
    initAccordion();

    const btn = document.getElementById('btn')!;
    const content = document.getElementById('content')!;

    // 3. Кликаем
    btn.click();

    // 4. Проверяем, что появился класс 'active'
    expect(content.classList.contains('active')).toBe(true);
});