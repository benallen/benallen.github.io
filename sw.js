self.addEventListener('install', function(event) {
  console.log('install!');
});

self.addEventListener('activate', function(event) {
  console.log('activate!');
  // You're good to go!
});
