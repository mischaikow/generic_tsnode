import app from './app.js';

const server = app.listen(app.get('port'), () => {
  const PORT: number = 3000;
  console.log(`  App is running at http://localhost:${PORT} in %s mode\n`);
  console.log('  Press CTRL-C to stop\n');
});

export default server;
