const termUtils = require('./helpers/terminal');
const { exec } = require('child_process');

exec('npm run compile', (err) => {
    if (err) {
       console.error(err);
       console.error('Hubo un error compilando los ejercicios')
       return process.exit();
    } else {
        termUtils.showWelcomeMessage();
        termUtils.showContentGroupItems();
    }
  });








