const termUtils = require('./helpers/terminal');
const { exec } = require('child_process');

exec('npm run compile', (err) => {
    if (err) {
      //some err occurred
       console.error(err);
       return process.exit();
    } else {
        termUtils.showWelcomeMessage();
        termUtils.showContentGroupItems();
    }
  });








