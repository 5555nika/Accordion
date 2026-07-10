// Импортируем стили
import './style.css';

const modals = document.querySelectorAll<HTMLElement>('[data-modal')

modals.forEach(modal => {
    modal.addEventListener('click', () => {
        const content = modal.nextElementSibling as HTMLElement | null
        if (content) {
            content.classList.toggle('active')
        }
    })
})