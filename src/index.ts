// Импортируем стили
import './style.css';

/**
 * Инициализирует логику аккордеона.
 * Находит все элементы с атрибутом [data-modal] и навешивает обработчик клика,
 * который переключает класс 'active' у следующего соседнего элемента.
 */
export function initAccordion(root: ParentNode = document): void {
    const modals = root.querySelectorAll<HTMLElement>('[data-modal]');

    modals.forEach(modal => {
        modal.addEventListener('click', () => {
            const content = modal.nextElementSibling as HTMLElement | null;
            if (content) {
                content.classList.toggle('active');
            }
        });
    });
}

// Автоматически запускаем при загрузке страницы в браузере
if (typeof document !== 'undefined') {
    initAccordion();
}