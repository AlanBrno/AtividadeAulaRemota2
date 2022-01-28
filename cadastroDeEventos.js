// Sistema de Cadastro de Eventos
// OK -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

// OK -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

// OK -Listar participantes e palestrantes por evento.
 
// OK -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
let validDateForEvent = new Date(new Date()-3600*1000*3); // Variável que irá coletar a data atual.

let registerEventData = new Date('01/28/2022');
let idadeDoParticipante = 19;
let eventParticipants = ["João", "Maria", "José"];
let speakersOfEvent = ["Dra. Margie Simpson", "Dr. Bart Simpson", "Dr. Hommer Simpson" ];
        
    //Validação para verificar se o número de participantes é menor que 100.
    if (eventParticipants.length > 99) {
    console.log("Quantidade de Participantes do evento Excedida!");
    }
    //Verificação se o participante é maior de 18 anos.
    else if (idadeDoParticipante < 18) {
        console.log("Não é permitido o cadastro de pessoas menores de 18 anos.");
    }
    
    else if (registerEventData > validDateForEvent) {
        console.log(`Evento Cadastrado com sucesso no dia ${registerEventData.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}, os Participantes do evento serão:`);
            // Listar participantes e palestrantes por evento.
            for(let contador = 0; contador < eventParticipants.length; contador++){
                console.log(eventParticipants[contador])}
                console.log("Os Palestrantes do Evento serão:");
            // Listar palestrantes do evento.
            for(let contador = 0; contador < speakersOfEvent.length; contador++){
                console.log(speakersOfEvent[contador]);}

    } else {
        console.log(`O evento não pode ser cadastrado no dia ${registerEventData.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} as datas devem ser posteriores ao dia de hoje.`);
}
