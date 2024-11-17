// Mostrar mensajes

export function showMessage(containerMessage, message, imageUrl) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add("message-container");

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.alt = "Mensaje de error";
  imageElement.classList.add("message-image");

  const messagesElement = document.createElement('p');
  messagesElement.classList.add("message-text");
  messagesElement.textContent = message;

  messageContainer.appendChild(imageElement);
  messageContainer.appendChild(messagesElement);

  containerMessage.appendChild(messageContainer);
}
