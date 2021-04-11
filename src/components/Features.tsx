import Image from 'next/image'
export function Features() {
  return (
<section className="bg-white border-b py-8 border-white">
  <div className="container max-w-5xl mx-auto py-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Quem sou eu?
    </h2>
    <div className="flex items-center flex-wrap mb-20 sm:mx-auto">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">Desenvolvedor FullStack</h4>
        <p className="text-gray-600 mb-8">Já desenvolvi dezenas de projetos ao longo desses 3 anos, desde ecommerce até sistemas administrativos de grande porte.</p>
      </div>
      <div className="w-full md:w-1/2">
        <Image src="/assets/profile.jpg" height={600} width={600} layout="responsive" alt="Profile" />
      </div>
    </div>

    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <Image src="/assets/client.svg" alt="Client" layout="responsive" width={490} height={369} />
      </div>
      <div className="w-full md:w-1/2 pl-10">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">Freelancer</h4>
        <p className="text-gray-600 mb-8">Ao longo desses anos consigo descobrir qual é a estratégia ideal pro meu cliente e fazer o que precisa ser feito</p>
      </div>
    </div>

    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">Determinado</h4>
        <p className="text-gray-600 mb-8">Faço tudo que posso pelos meus objetivos, com certeza farei para os seus também</p>
      </div>
      <div className="w-full md:w-1/2">
        <Image src="/assets/health.svg" alt="Syncing" height={301} width={459} />
      </div>
    </div>
  </div>
</section>
  )
}
