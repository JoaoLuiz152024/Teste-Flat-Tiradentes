document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Replace PHONE_NUMBER with your WhatsApp phone number
    var phoneNumber = '+55 32 999766323';
    
    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    // Create WhatsApp message
    var whatsappMessage = 'Olá! Meu nome é ' + name + '. Meu telefone é ' + phone + '. Mensagem: ' + message;
    
    // Create WhatsApp URL
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(whatsappMessage);
    
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  });

document.getElementById('mapa').addEventListener('click', function(){
    window.location.href = 'pontos_turisticos.html'
})  