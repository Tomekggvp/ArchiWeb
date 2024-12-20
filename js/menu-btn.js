document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const toggleButton = document.getElementById('toggleButton');

    
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== toggleButton) {
            menu.classList.add('hidden');
        }
    });

   
    toggleButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        menu.classList.toggle('hidden');
    });
});

