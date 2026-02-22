export default function Mapa() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full aspect-video sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-lg border-2 sm:border-3 border-dourado">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8921.519739457799!2d-43.950201001783675!3d-19.92284627423683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6975c393c9e9f%3A0x7800f64fa50ee767!2sLoja%20do%20Cruzeiro%20-%20Barro%20Preto!5e0!3m2!1spt-BR!2sbr!4v1770428236120!5m2!1spt-BR!2sbr" 
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}