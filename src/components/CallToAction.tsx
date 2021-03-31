export function CallToAction() {
  return (
    <section>
      <div className="container mx-auto px-6 text-center py-20">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">
          Gostou do que viu?
        </h2>
        <h3 className="my-4 text-2xl text-white">Fale Comigo</h3>
        <button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5511937074801&text=Oi%2C%20eu%20vi%20o%20seu%20site%20e%20gostei%2C%20resolvi%20te%20contatar",
              "_blank"
            )
          }
          className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
        >
          Contate
        </button>
      </div>
    </section>
  );
}
