import nodemailer from 'nodemailer'

// Configuración del servicio de correo electrónico (usando un servicio de prueba, debes configurar el tuyo)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agus476psn@gmail.com',
    pass: 'teamo15a'
  }
});

function enviarCorreo(mensaje) {
  const opcionesCorreo = {
    from: 'agus476psn@gmail.com',
    to: 'actualizacion@gisbertrepuestos.com.ar',
    subject: 'Alarma',
    text: mensaje
  };

  transporter.sendMail(opcionesCorreo, function(error, info){
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
}

function configurarAlarmaConCorreo(intervalo, mensaje) {
  setInterval(function() {
    console.log(`¡Alarma! ${mensaje}`);
    enviarCorreo(mensaje);
  }, intervalo);
}

// Ejemplo: Configurar una alarma para enviar un correo cada 10 minutos
configurarAlarmaConCorreo(5000, 'Este es tu mensaje de alarma');