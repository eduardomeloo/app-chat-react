const schedule = require('node-schedule');
const User = require('../models/User');
const Message = require('../models/Message');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const fs = require('fs').promises;
const path =  require('path');

dotenv.config();

//Executa todos os dias às 23h '0 23 */1 * *'
//Executa todos os dias às 6h  '0 6 */1 * *'
//Executa todos os dias de 1 em 1 minuto '* * * * *'
//Executa todos os dias de 2 em 2 minutos '*/2 * * * *'
//Executa todos os dias de 30 em 30 segundos */30 * * * * *

schedule.scheduleJob('0 6 */1 * *' , async function () {
    
    await Message.deleteMany()
    await User.deleteMany()

    const bcryptSalt = bcrypt.genSaltSync(10)

    const username = 'teste'
    const password = 'teste'

    const username1 = 'teste1'
    const password1 = 'teste1'

    try {
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt)
        const hashedPassword1 = bcrypt.hashSync(password1, bcryptSalt)

        await User.create({username: username,  password: hashedPassword });
        await User.create({username: username1, password: hashedPassword1 });

    } catch(err) {
        if(err) throw err;
        res.status(500).json('error')
    }

    try {
        const folderPath = path.join(__dirname, '../uploads')
        const files = await fs.readdir(folderPath);
        if(files.length > 0) {
            for (const file of files) {
                await fs.unlink(path.resolve(folderPath, file));
                console.log(`${folderPath}/${file} has been removed successfully`);
            }
        }
    } catch (err){
        console.log(err);
    }

})