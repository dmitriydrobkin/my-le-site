const req = await fetch('http://localhost:3005/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    lang: 'uk',
    messages: [
      { role: 'user', content: 'Привіт, скільки коштує лендінг?' }
    ]
  })
});
const text = await req.text();
console.log('STATUS:', req.status);
console.log('RESPONSE:', text);
