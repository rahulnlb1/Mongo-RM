const childProcess1 = require('child_process');

childProcess1.spawn('tsc --watch', {
    cwd: '.',
    shell: true,
    stdio: 'inherit',
});

childProcess1.execSync('nodemon -r dotenv/config js/index.js', {
    cwd: '.',
    shell: true,
    stdio: 'inherit',
});