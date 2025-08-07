document.addEventListener('DOMContentLoaded', function() {
    // --- AQUÍ es donde debes escribir tu mensaje ---
    const myMessage = `Anderson, esta carta la escribo para agradecerte por ser el gran amigo que has sido conmigo, por acompañarme en las buenas y en las malas, por hacerme reir, por invitarme a pasar momentos inolvidables juntos, por ser el gran amigo que has sido conmigo y con todos. 
    Quiero desearte la mayor de las suertes y los mejores exitos en tu viaje, sé que lo harás muy bien, que serás el mejor y tambien sé que cualquier cosa que te propongas podrás lograrla, nunca olvides de donde vienes, nunca. y recuerda que siempre, pero siempre que lo necesites, estaré ahi para ayudarte con lo que sea. Tu para mi eres practicamente un hermano más, alguien a quien aprecio con el corazon y aquien jamás defraudaria, te agradezco por permitirme ser parte de tu vida y gracias por llegar a la mia, gracias por crear una confianza junto a mi, por crear este lazo que nos une y que nos unira el resto de nuestras vidas, porque por muy lejos que estemos, si me necesitas, yo llegaré a ti. 
    Te amo, hermano, cumple todas tus metas, alcanza tus sueños, yo me emcargo de lo demás mientras espero tu regreso para escuchar tus historias y tus logros... buen viaje.
    
    De corazon, Hans.`;

    // Asignar el mensaje al elemento de la carta
    const messageContent = document.getElementById('message-content');
    messageContent.textContent = myMessage;

    // Agregar el evento de clic al sobre
    document.getElementById('envelope').addEventListener('click', function() {
        this.classList.add('open');
    });
});