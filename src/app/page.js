import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import Card from '@/components/Card';
import CardEntenda from '@/components/CardsEntenda';
import IconWithToggle from '@/components/IconWithToggle';

export default function Portal() {
  const cards = [
    {
      imagem: "/images/Chatbot.svg",
      texto: "Chatbot com nossa inteligência artificial pronta pra responder todas as suas perguntas!"
    },
    {
      imagem: "/images/Consultas.svg",
      texto: "Acesso ao seu histórico de consultas com seus médicos preferidos!"
    },
    {
      imagem: "/images/Exames.svg",
      texto: "Aba de exames, onde você pode centralizar todos os arquivos em um só local, podendo acessar de qualquer lugar!"
    },
    {
      imagem: "/images/Habitos.svg",
      texto: "Life hacks e dicas de hábitos saudáveis para tornar a rotina mais prática e descomplicada!"
    }
  ]
  const cards2 = [
    {
      imagem: "/images/Metas.svg",
      texto: "Construa suas metas saudáveis semanais, como exercícios, ingestão de água e muito mais!"
    },
    {
      imagem: "/images/Receitas.svg",
      texto: "Receitas práticas e saudáveis, porque a nossa mudança tem que vir de dentro pra fora!"
    },
    {
      imagem: "/images/Doencas.svg",
      texto: "Informativos sobre doenças, suas características, seus sintomas e tratamentos!"
    },
  ]

  const accordeon = [
    {
      pergunta:"O chatbot responde perguntas complexas?",
      resposta:"O chatbot fornece informações gerais, para questões médicas específicas você deve consultar um profissional de saúde."
    },
    {
      pergunta:"É seguro inserir meus dados de saúde no aplicativo?",
      resposta:" Sim, seus dados são tratados com segurança, privacidade e protegidos pelas leis LGPD. Consulte nossa política de privacidade para obter mais informações."
    },
    {
      pergunta:"Como posso compartilhar minhas conquistas nas redes sociais?",
      resposta:" Você pode compartilhar suas conquistas quando bater suas metas semanais diretamente do aplicativo. Procure o ícone de compartilhamento abaixo do calendário!"
    },
    {
      pergunta:"Por onde posso pedir mudanças no aplicativo/site?",
      resposta:" Use a seção 'Fale Conosco' localizada clicando no nosso logo para compartilhar suas ideias e feedback. Sua opinião é valiosa para nós."
    },
    {
      pergunta:"O Chatbot pode preescrever remédios?",
      resposta:" Não! Apenas um médico com CRM pode preescrever remédios. Você pode consultar um de nossos médicos parceiros se estiver precisando de ajuda com algo!"
    },
  ]
  return (
    <>
    <section className='flex flex-col gap-8'>
      <nav className='flex items-center justify-between navBackground p-4'>
        <div className='flex items-center'>
          <img className='imagemlogo' src="/images/Logo.svg"></img>
          <a><MagnifyingGlassIcon className='w-7 text-black mb-2'></MagnifyingGlassIcon></a>
        </div>
        <div className='flex items-center'>
          <a className='mr-5 mb-1 text-black underline-2'>Criar Conta</a>
          <a><UserIcon className='w-7 text-black icon mb-2'></UserIcon></a>
        </div>
      </nav>


      <h1 className='titulo mt-8'>Construa hábitos saudáveis, cuide da sua saúde e mantenha<br></br>um contato mais próximo de seus médicos! </h1>
      <h2 className='texto mt-12 ml-8'>Juntando-se a nossa comunidade você tem acesso à:</h2>


      <div className='flex mt-12 ml-8 mr-8 gap-20'>
        {cards.map(card => <Card card={card}></Card>)}
      </div>
      <div className='flex mt-12 ml-8 mr-8 gap-20'>
        {cards2.map(card => <Card card={card}></Card>)}
      </div>



      <div className='divimagem mt-12 flex flex-col mb-3'>
        <h1 className="titulop mt-12">Faça parte!</h1>
      </div>
      <div className='flex items-center justify-center botao text-black hover:bg-purple-500'> 
        <p className='textobotao'>CRIAR CONTA</p>
      </div>

      <div className='flex mt-20 ml-20 mr-20 gap-20 justify-evenly'>
        <div className='flex flex-col items-center justify-center'>
          <p className='textoinformativo mt-4'><span className='text-[2rem]'>Apenas</span> <br></br><strong className='text-[#5D896D] text-[3.5rem] ml-20'>16%</strong><br></br> <span className='flex text-center'>dos adultos consomem a <br></br> quantidade recomendada <br></br> de fibras diariamente.</span></p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='textoinformativo mt-4'><span className='text-[2rem]'>Até</span> <br></br><strong className='text-[#5D896D] text-[3.5rem] ml-20'>2030</strong><br></br> <span className='flex text-center'>1 em cada 3 brasileiros poderia <br></br> estar em risco de problemas de <br></br> saúde relacionados ao consumo <br></br> excessivo de fast food.</span></p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='textoinformativo mt-4'><span className='text-[2rem]'>Apenas</span> <br></br><strong className='text-[#5D896D] text-[3.5rem] ml-20'>12,5%</strong><br></br> <span className='flex text-center'>dos adultos atendem às <br></br> diretrizes recomendadas de <br></br> atividade física</span></p>
        </div>
      </div>

      <div className='flex ml-10 w-full mt-12 pt-12'>
        <h1 className='titulov'>Entenda mais:</h1>
      </div>
      
      <CardEntenda></CardEntenda>

      <div className='flex justify-center w-full mt-12'>
        <h1 className="titulop">Dúvidas frequentes:</h1>
      </div>


      <div className='flex flex-col gap-5 items-center justify-center '>
        {accordeon.map(accordeon => <IconWithToggle accordeon={accordeon}></IconWithToggle>)}
      </div>

    </section>
    <footer className='footer mt-20'>
      <div>
        <h1 className=''>Fale Conosco</h1>
      </div>
    </footer>
    </>
  )
}
