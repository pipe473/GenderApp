import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
   const { email, nombre, token } = datos;

   const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  // Informacion del email

  const info = await transport.sendMail({
      from: '"Babyshower - Admin lista de regalos" <cuentas@babyshower.com>',
      to: email,
      subject: "Babyshower - Te esperamos!! Confirma tu asistencia",
      text: "Por favor comprueba que esté todo correcto",
      html: `<p>Hola: ${nombre} Confirma tu asistencia al babyshower de POL</p>
      <p>Tu cuenta está casi lista, solo debes confirmar en el siguiente enlace:</p>
      
      <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar</a>


      <p>Si no has creado esta cuenta, puedes ignorar el mensaje</p>
      
      `,
  });
};

export const emailOlvidePAssword = async (datos) => {
    const { email, nombre, token } = datos;
 
    const transport = nodemailer.createTransport({
     host: process.env.EMAIL_HOST,
     port: process.env.EMAIL_PORT,
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS
     },
   });
 
   // Informacion del email
 
   const info = await transport.sendMail({
       from: '"Babyshower - Admin lista de regalos" <cuentas@babyshower.com>',
       to: email,
       subject: "Babyshower - Reestablece tu contraseña",
       text: "Por favor comprueba que esté todo correcto",
       html: `<p>Hola: ${nombre} has solicitado reestablcer contraseña</p>
       <p>Sigue el siguiente enlace para generar una nueva contraseña</p>
       
       <a href="${process.env.FRONTEND_URL}/recuperar-password/${token}">Reestablecer contraseña</a>
 
 
       <p>Si no has solicitado este email, puedes ignorar el mensaje</p>
       
       `,
   });
 };
 
export default emailRegistro;