import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import Card from '@/components/Card';
import CardEntenda from '@/components/CardsEntenda';
import IconWithToggle from '@/components/IconWithToggle';

import Link from 'next/link';

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
          {/* <a><MagnifyingGlassIcon className='w-7 text-black mb-2'></MagnifyingGlassIcon></a> */}
        </div>
        <div className='flex items-center'>
          <Link href='/Cadastro'><span className='mr-5 mb-1 text-black underline-2 hover:underline'>Criar Conta</span></Link>
          <Link href='/Login'><UserIcon className='w-7 text-black icon mb-2'></UserIcon></Link>
        </div>
      </nav>


      <h1 className='titulo mt-8'>Construa hábitos saudáveis, cuide da sua saúde e mantenha<br></br>um contato mais próximo de seus médicos! </h1>
      <h2 className='texto mt-12 ml-8'>Juntando-se a nossa comunidade você tem acesso à:</h2>


      <div className='flex mt-12 gap-20 justify-center'>
        {cards.map(card => <Card card={card}></Card>)}
      </div>
      <div className='flex mt-12 gap-20 justify-center'>
        {cards2.map(card => <Card card={card}></Card>)}
      </div>



      <div className='divimagem mt-12 flex flex-col mb-3'>
        <h1 className="titulop mt-12">Faça parte!</h1>
      </div>
      <Link href='/Cadastro'>
        <div className='flex items-center justify-center botao text-black hover:bg-purple-500'> 
          <button className='textobotao'>CRIAR CONTA</button>
        </div>
      </Link>

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
      <div className='flex justify-between'>
        <div>
          <h1 className='titulofooter p-8'>Fale Conosco</h1>
          <p className='textopadrao ml-8 mb-2'>Av. das Nações Unidas, 14401 - Chácara Santo Antônio <br></br> (Zona Sul), São Paulo - SP, 04794-000</p>
          <p className='textopadrao ml-8'>CNPJ: 02.685.377/0001-57</p>
        </div>
        <div>
          <p className='textopadrao mr-10 mb-3 pt-6'>© Sanofi 2004-2022 Todos os direitos reservados.</p>
          <h3 className='textoinformativo mr-10'>Política de Privacidade e Dados</h3>
        </div>
      </div>
      <div className='flex mt-20 ml-8 justify-around'>
        <div>
          <h3 className='textoinformativo font-mixed'>Sanofi<br></br></h3>
          <ul className='ml-8 mr-12'>
            <li  className='textopadrao font-mixed'>- Quem somos<br></br></li>
            <li  className='textopadrao font-mixed'>- Trabalhe conosco<br></br></li>
            <li  className='textopadrao font-mixed'>- Política de privacidade<br></br></li>
            <li  className='textopadrao font-mixed'>- Compromisso de integridade<br></br></li>
            <li  className='textopadrao font-mixed'>- Termos de uso<br></br></li>
            <li  className='textopadrao font-mixed'>- Status<br></br></li>
          </ul>
        </div>
        <div>
          <h3 className='textoinformativo font-mixed'>Nosso aplicativo<br></br></h3>
          <ul className='ml-8 mr-12'>
            <li  className='textopadrao font-mixed'>- Funcionalidades<br></br></li>
            <li  className='textopadrao font-mixed'>- Política de privacidade<br></br></li>
            <li  className='textopadrao font-mixed'>- Apoio a uma pessoa com deficiência<br></br></li>
            <li  className='textopadrao font-mixed'>- Reporte um problema<br></br></li>
          </ul>
        </div>
        <div>
          <h3 className='textoinformativo font-mixed'>Nosso site<br></br></h3>
            <ul className='ml-8 mr-12'>
              <li  className='textopadrao font-mixed'>- Funcionalidades<br></br></li>
              <li  className='textopadrao font-mixed'>- Política de privacidade<br></br></li>
              <li  className='textopadrao font-mixed'>- Apoio a uma pessoa com deficiência<br></br></li>
              <li  className='textopadrao font-mixed'>- Reporte um problema<br></br></li>
            </ul>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <h2 className='textoinformativo'>SIGA-NOS NAS REDES SOCIAIS</h2>
      </div>
      <div className='flex justify-center mt-10'>
        <img src='images/rede_social.svg'></img>
      </div>
      <p className='textopadrao mt-20 ml-5'>Caráter Informativo: <br></br>As informações disponibilizadas não substituem avaliação, diagnóstico,tratamento ou acompanhamento de profissionais.</p>
    </footer>
    </>
  )
}
