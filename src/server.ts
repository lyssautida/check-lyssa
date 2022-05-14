import app from './app';

function main() {
  app.listen(3333, () => {
    console.log('🔥🔥🔥 Server started at http://0.0.0.0:3333/ 🔥🔥🔥');
  });
}

main();
