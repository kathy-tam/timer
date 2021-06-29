const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('.');
  }

  if(key > 0 && key < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('.'), key*1000);
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});