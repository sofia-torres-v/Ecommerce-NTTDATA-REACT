// Mostrar mensajes
export function showMessage(containerMessage, message) {
  const messagesElement = document.createElement('p');
  messagesElement.classList.add("message-text");
  messagesElement.textContent = message;
  containerMessage.appendChild(messagesElement);
}
