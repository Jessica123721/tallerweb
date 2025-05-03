// Función para imprimir el CV
function printCV() {
    window.print();
}

// Agregar botón de impresión cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón de impresión
    const printButton = document.createElement('button');
    printButton.textContent = 'Imprimir CV';
    printButton.id = 'print-button';
    printButton.style.position = 'fixed';
    printButton.style.bottom = '20px';
    printButton.style.right = '20px';
    printButton.style.padding = '10px 15px';
    printButton.style.backgroundColor = '#1e56a0';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '5px';
    printButton.style.cursor = 'pointer';
    
    // Agregar evento de clic
    printButton.addEventListener('click', printCV);
    
    // Agregar botón al documento
    document.body.appendChild(printButton);
    
    // Ocultar botón al imprimir
    const style = document.createElement('style');
    style.textContent = '@media print { #print-button { display: none; } }';
    document.head.appendChild(style);
});