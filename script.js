
/// Função para salvar os dados da textarea no Local Storage
function saveData() {
    // Obtém o valor da textarea
    const textareaValue = document.getElementById('textboxhelp').value;
    
    // Salva os dados no Local Storage
    localStorage.setItem('textareaData', textareaValue);
    
    // Chama a função para mostrar os dados imediatamente após salvá-los
    showData();
}

// Função para carregar os dados do Local Storage para a textarea
function showData() {
    // Obtém os dados do Local Storage
    const data = localStorage.getItem('textareaData');
    
    // Obtém a div pelo id
    const dataDiv = document.getElementById('feedtexto');

    // Insere os dados na div
    dataDiv.textContent = data || ''; // Se data for null, defina como uma string vazia
}
function feed() {
            document.getElementById('forumForm').addEventListener('submit', function(event) {
                event.preventDefault();
                
                const nome = document.getElementById('nome').value;
                const titulo = document.getElementById('titulo').value;
                const mensagem = document.getElementById('mensagem').value;
    
                const storedMessages = JSON.parse(localStorage.getItem('forumMessages')) || [];
                storedMessages.push({ nome, titulo, mensagem });
                localStorage.setItem('forumMessages', JSON.stringify(storedMessages));
                
                window.location.href = 'firstpage.html';
            });
          }

// Chama a função showData() quando a página é carregada inicialmente
showData();


    

//futuramente ligar aos banco 

// Carrega automaticamente os dados salvos quando a página é carregada
//window.onload = function() {
  //  loadData();
//}