const schedule = require('node-schedule')
const User = require('../models/User');
const Message = require('../models/Message');

//Executa todos os dias às 23h '0 23 */1 * *'
//Executa todos os dias às 6h  '0 6 */1 * *'
//Executa todos os dias de 1 em 1 minuto '* * * * *'
//Executa todos os dias de 2 em 2 minutos '*/2 * * * *'
//Executa todos os dias de 30 em 30 segundos */30 * * * * *

schedule.scheduleJob('* * * * *' , async function () {
    
    await Message.deleteMany()
    await User.deleteMany()

})