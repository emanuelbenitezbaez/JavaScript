import './style.css'

// Estado global
const state = {
  friends: []
};

// Configuración inicial de la UI
function setupUI() {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>Challenge Amigo Secreto</h1>
      <div class="input-group">
        <input 
          type="text" 
          id="friendInput" 
          placeholder="Ingresa el nombre de tu amigo"
          maxlength="50"
        >
        <button id="addButton">Agregar Amigo</button>
      </div>
      <div id="error" class="error"></div>
      <div class="friends-list" id="friendsList">
        <p>No hay amigos agregados</p>
      </div>
      <button id="selectButton" disabled>Seleccionar Amigo Secreto</button>
      <div id="result" class="result"></div>
    </div>
  `;

  bindEvents();
}

// Vincular eventos
function bindEvents() {
  const input = document.querySelector('#friendInput');
  const addButton = document.querySelector('#addButton');
  const selectButton = document.querySelector('#selectButton');

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addFriend();
    }
  });

  addButton.addEventListener('click', addFriend);
  selectButton.addEventListener('click', selectRandomFriend);
}

// Agregar un amigo
function addFriend() {
  const input = document.querySelector('#friendInput');
  const error = document.querySelector('#error');
  const name = input.value.trim();

  // Validaciones
  if (name === '') {
    showError('Por favor ingresa un nombre');
    return;
  }

  if (name.length < 3) {
    showError('El nombre debe tener al menos 3 caracteres');
    return;
  }

  if (state.friends.includes(name)) {
    showError('Este amigo ya está en la lista');
    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
    showError('El nombre solo puede contener letras y espacios');
    return;
  }

  state.friends.push(name);
  input.value = '';
  error.textContent = '';
  updateFriendsList();
  updateSelectButton();
}

// Mostrar error
function showError(message) {
  const error = document.querySelector('#error');
  error.textContent = message;
}

// Actualizar lista de amigos
function updateFriendsList() {
  const friendsList = document.querySelector('#friendsList');
  if (state.friends.length === 0) {
    friendsList.innerHTML = '<p>No hay amigos agregados</p>';
    return;
  }

  friendsList.innerHTML = state.friends.map((friend, index) => `
    <div class="friend-item">
      <span>${friend}</span>
      <button class="delete-btn" onclick="deleteFriend(${index})">
        Eliminar
      </button>
    </div>
  `).join('');
}

// Eliminar amigo
function deleteFriend(index) {
  state.friends.splice(index, 1);
  updateFriendsList();
  updateSelectButton();
  document.querySelector('#result').textContent = '';
}

// Actualizar estado del botón de selección
function updateSelectButton() {
  const selectButton = document.querySelector('#selectButton');
  selectButton.disabled = state.friends.length < 2;
}

// Seleccionar amigo aleatorio
function selectRandomFriend() {
  const result = document.querySelector('#result');
  const randomIndex = Math.floor(Math.random() * state.friends.length);
  result.textContent = `¡${state.friends[randomIndex]} es el amigo secreto!`;
}

// Hacer accesible la función deleteFriend globalmente
window.deleteFriend = deleteFriend;

// Inicializar la aplicación
setupUI();