const accountSid = 'AC4358ba5afbdd67445632553102f46b8d'; 
const authToken = '70cd95c3c48766e1c46fb7afd82f8c56'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+5218715627580' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();