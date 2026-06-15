export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-black pointer-events-none">
      {/* Анимированные светящиеся сферы на чистом CSS/Tailwind */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse" 
        style={{ animationDuration: '8s' }} 
      />
      <div 
        className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen animate-pulse" 
        style={{ animationDuration: '10s', animationDelay: '2s' }} 
      />
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen animate-pulse" 
        style={{ animationDuration: '9s', animationDelay: '4s' }} 
      />
    </div>
  );
}