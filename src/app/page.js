import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import Card from '@/components/Card';
import CardEntenda from '@/components/CardsEntenda';

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
      <div className='flex mt-12 ml-8 mr-8'>
        {cards.map(card => <Card card={card}></Card>)}
      </div>
      <div className='flex justify-center mt-10'>
        <div class="border-b border-black w-3/4 pt-4"></div>
      </div>
      <div className='flex mt-12 ml-8 mr-8'>
        {cards2.map(card => <Card card={card}></Card>)}
      </div>

      <div className='divimagem mt-12 flex flex-col items-center mb-12'>
        <h1 className="titulop mt-12">Venha fazer parte!</h1>
        <div className='flex items-center justify-center w-85 botao p-3 text-black mt-5 hover:bg-purple-500'> 
          <p className='textobotao'>Criar Conta</p>
        </div>
      </div>
        
      <div className='flex justify-center w-full mt-12'>
        <h1 className="titulop">Você sabia?</h1>
      </div>
      
      <div className='flex mt-12'>
        <div className='flex flex-col items-center justify-center'>
          <img className='imagemsabia' src='/images/sabia1.svg'></img>
          <p className='textoinformativo text-center mt-4'>Apenas 16% dos adultos consomem a quantidade recomendada de fibras diariamente.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img className='imagemsabia' src='/images/sabia2.svg'></img>
          <p className='textoinformativo text-center mt-4'>Com base nas tendências atuais, até 2030, 1 em cada 3 brasileiros poderia estar em risco de problemas de saúde relacionados ao consumo excessivo de fast food.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img className='imagemsabia' src='/images/sabia3.svg'></img>
          <p className='textoinformativo text-center mt-4'>Apenas 12,5% dos adultos atendem às diretrizes recomendadas de atividade física</p>
        </div>
      </div>

      <div className='flex ml-10 w-full mt-12 pt-12'>
        <h1 className='titulov'>Entenda mais:</h1>
      </div>
      
      <CardEntenda></CardEntenda>

      <div className='flex justify-center w-full mt-12'>
        <h1 className="titulop">Dúvidas frequentes:</h1>
      </div>
    </section>
    <footer className='footer'>
      <div>
        <h1 className=''>Fale Conosco</h1>
      </div>
    </footer>
    </>
  )
}
