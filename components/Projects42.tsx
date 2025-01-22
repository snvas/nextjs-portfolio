import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/card";

interface Project {
  title: string;
  description: string;
  icon: string;
  path: string;
}

const projects: Project[] = [
  {
    title: "Libft",
    description:
      "Este é o primeiro projeto como estudante da 42 e o trabalho é recodificar algumas funções da biblioteca padrão C, bem como algumas outras funções utilitárias que serão usadas durante todo o curso.",
    icon: "/images/badges42/libftm.png",
    path: "https://github.com/snvas/42course_libft",
  },
  {
    title: "Get Next Line",
    description:
      "Este projeto trata de programar uma função que retorna uma linha lido de um descritor de arquivo. Seja um arquivo, stdin ou até mesmo uma conexão de rede, você sempre precisará de uma forma de ler o conteúdo linha por linha.",
    icon: "/images/badges42/get_next_linem.png",
    path: "https://github.com/snvas/42course_get_next_line",
  },
  {
    title: "Printf",
    description:
      "ft_printf é um projeto que pede para criarmos a nossa própria versão da função printf(). Na linguagem de programação C, a função printf() é usada para imprimir os (valores de caractere, string, float, inteiro, octal e hexadecimal) na tela de saída, retornando o número de caracteres escritos.",
    icon: "/images/badges42/ft_printfm.png",
    path: "https://github.com/snvas/42course_printf",
  },
  {
    title: "Born2beroot",
    description:
      "Born2beroot é um projeto que exige a criação de uma máquina virtual com servidor SSH, regras de firewall e como bônus uma instalação de Wordpress e um serviço como FTP ou DNS. O Sistema Operacional pode ser Debian ou CentOS e um script de monitoramento com informações do sistema operacional deve ser executado a cada 10 minutos.",
    icon: "/images/badges42/born2berootm.png",
    path: "https://soraianovaes.com.br",
  },
  {
    title: "So_long",
    description:
      "SoLong é um projeto que exige a criação de um jogo 2D muito pequeno. Ele foi construído para fazer você trabalhar com texturas, sprites e alguns elementos de jogabilidade muito básicos usando MinilibX, uma API de programação X-Window (X11R6) simples em C, projetada para estudantes, adequada para iniciantes em X.",
    icon: "/images/badges42/so_longe.png",
    path: "https://github.com/snvas/42course_so_long",
  },
  {
    title: "Pipex",
    description:
      "Pipex é um projeto que exige que criemos um programa que simule o comportamento do shell pipe, recebendo um arquivo ou lendo do STDIN e redirecionando para uma sequência de comandos que serão gravados no arquivo de saída. ",
    icon: "/images/badges42/pipexe.png",
    path: "https://github.com/snvas/42course_pipex",
  },
  {
    title: "Push Swap",
    description:
      "Este projeto envolve a classificação de dados em uma pilha, com um conjunto limitado de instruções e o menor número de movimentos. Para que isso aconteça, você terá que manipular vários algoritmos de classificação e escolher a(s) solução(ões) mais apropriada(s) para classificação otimizada de dados.",
    icon: "/images/badges42/push_swape.png",
    path: "https://github.com/snvas/42course_push_swap",
  },
  {
    title: "Minishell",
    description:
      "O objetivo deste projeto é criar um shell simples, lidando com processos e file descriptors. Simplificando, um shell é a camada mais externa de comunicação entre o usuário e o sistema operacional. Permitindo-nos navegar e executar tarefas em linguagem legível por humanos.",
    icon: "/images/badges42/minishelle.png",
    path: "https://github.com/HcDuller/42_minishell",
  },
  {
    title: "Philosopher",
    description:
      "Philosophers é um projeto que exige que resolvamos o problema do Jantar dos Filósofos usando threads, processos e mutex. A parte obrigatória deve ser resolvida usando threads e mutex. A solução foi implementada por meio de uma thread de monitoramento, que verifica se algum filósofo morreu e avisa os demais para pararem (locking mutex).",
    icon: "/images/badges42/philosopherse.png",
    path: "https://github.com/snvas/42course_philosophers",
  },
  {
    title: "NetPratice",
    description:
      "NetPractice é um projeto que exige a configuração de redes de pequena escala. Numa rede, os dispositivos precisam se comunicar. Para isso foram criados protocolos e modelos de comunicação. Entre eles, está o modelo TCP/IP. TCP/IP é um conjunto de protocolos de comunicação. O nome vem de dois protocolos TCP (Transmission Control Protocol) e IP (Internet Protocol). Tem como objetivo padronizar todas as comunicações em rede, especialmente as comunicações na web.",
    icon: "/images/badges42/netpracticee.png",
    path: "https://github.com/snvas/42course_netpratice",
  },
  {
    title: "Cub3D",
    description:
      "Cub3D é um projeto de equipe que nos pede para criar um motor de jogo 3D com miniLibX. Este projeto é inspirado no mundialmente famoso jogo Wolfenstein 3D dos anos 90, que foi o primeiro FPS de todos os tempos. O objetivo deste projeto é aprofundar-se nos conceitos matemáticos por trás do algoritmo de projeção de raios, como cálculo de distâncias, altura, localização de sprites e campo de visão para criar uma projeção usando principalmente trigonometria.",
    icon: "/images/badges42/cub3de.png",
    path: "https://github.com/hde-oliv-42/cub3D",
  },
  {
    title: "CPP",
    description:
      "CPP é o nome do mini pool C++ em 42, um conjunto de várias listas de exercícios que vão desde conceitos básicos de orientação a objetos, como polimorfismo e herança, até modelos C++. C++ (dito C plus plus) é uma linguagem de computador orientada a objetos criada pelo notável cientista da computação Bjorne Stroustrop como parte da evolução da família de linguagens C. Ele foi desenvolvido como uma melhoria multiplataforma de C para fornecer aos desenvolvedores um maior grau de controle sobre a memória e os recursos do sistema.",
    icon: "/images/badges42/cppe.png",
    path: "https://github.com/snvas/cpp-module00",
  },
  {
    title: "Ft_containers",
    description:
      "Ft_containers é um projeto que requer a reimplementação de alguns dos principais contêineres da biblioteca de modelos padrão C++ (C++ STL Containers). Os containers a serem implementados incluindo bônus são o vetor, mapa, conjunto e pilha. Também precisamos implementar os iteradores quando disponíveis, iterator_traits e reverse_iterator.",
    icon: "/images/badges42/ft_containersm.png",
    path: "https://github.com/snvas/ft_containers_entrega",
  },
  {
    title: "Inception",
    description:
      "Inception é um projeto que exige a construção de uma infraestrutura de serviços utilizando Docker, orquestrada pelo Docker Compose. Na parte obrigatória, um container com nginx e somente ele deve estar acessível pela porta 443, expondo os serviços da rede docker interna para acesso público. O serviço nginx se conecta ao contêiner wordpress executando php-fpm que armazena os dados em um serviço mariadb na rede. Os dados do site wordpress e mariadb devem ser persistidos cada um em seu próprio volume.",
    icon: "/images/badges42/inceptionm.png",
    path: "https://github.com/snvas/inception",
  },
  {
    title: "Webserv",
    description:
      "Webserv é um projeto de grupo que exige a construção de um servidor HTTP usando I/O Multiplexing construída sobre um loop de eventos. Na parte obrigatória, iniciamos o servidor lendo um arquivo de configuração que pode ser baseado em Nginx, contendo informações como nome do host (ip/porta), nome do servidor, arquivo de índice, listagem de diretórios, redirecionamento de URL, localização (caminho do vhost) e alguns outros configurações.",
    icon: "/images/badges42/webserve.png",
    path: "https://github.com/snvas/42course_webserver",
  },
  {
    title: "Ft_Transcendence",
    description:
      "ft_transcendence é um projeto de equipe que exige a construção de uma plataforma online para jogar Pong. O backend deve ser construído em NestJS, o frontend em qualquer framework TypeScript de sua preferência e o banco de dados deve ser PostgreSQL. Para o frontend a opção escolhida foi o Svelte, devido ao seu desempenho e extensa documentação. No geral, a plataforma deve contar com sistema de classificação, canais de chat, mensagens privadas, edição de perfil, visualização do status dos usuários e adição de outros membros como amigos. O objetivo principal é jogar uma implementação do Pong, como se fosse 1972. Deveria haver algumas opções de personalização, como mapas personalizados ou power-ups, mas o usuário ainda deveria ser capaz de jogar a versão original. Finalmente, a estrutura do servidor deve ser conteinerizada usando docker e disponível com uma única chamada de: docker-compose up --build.",
    icon: "/images/badges42/ft_transcendencee.png",
    path: "https://github.com/snvas/42course_fttranscendence",
  },
];

const Projects42 = () => {
  return (
    <div className="bg-[#121121] p-[3rem] md:pt-[8rem]">
      <div className="mt-16 md:mt-0 mx-auto container text-white" id="projects">
        <h1 className="heading">
          Projetos desenvolvidos na{" "}
          <span className="text-yellow-400">42 São Paulo</span>
        </h1>
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-3 justify-center">
          <Image
            src="/images/human-coder.png"
            alt="Human Coder"
            width={200}
            height={200}
            className="hover:scale-110"
          />
          <p className="mt-[1.5rem] text-[14px] md:text-[18px] text-[#ffffFF92] md:w-[70%] w-[95%]">
            Em minha formação pela École 42, desenvolvi um conjunto
            diversificado de projetos que atravessaram as fronteiras
            tradicionais da ciência da computação, enfrentando desde a
            reconstrução de funções de bibliotecas padrão até o desenvolvimento
            de aplicações complexas e sistemas integrados. Cada projeto foi
            cuidadosamente projetado para não apenas reforçar competências
            técnicas em linguagens como C e C++, mas também para instigar a
            resolução de problemas complexos, otimização de processos e a
            integração de múltiplas tecnologias. Esta experiência prática
            proporcionou uma compreensão profunda das exigências e nuances da
            programação de alto nível e do desenvolvimento de sistemas,
            preparando-me para enfrentar desafios tecnológicos complexos com
            soluções inovadoras e eficazes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:gap-10 gap-4 container mx-auto">
        {projects.map((project, index) => (
          <div key={index} data-aos="zoom-in-right">
            <Card className="bg-[#1b1931] text-white w-[95%] mx-auto md:p-10 p-6 h-full rounded-sm">
              <div className="gap-4 text-white flex md:flex-row flex-col items-center">
                <a
                  href={project.path}
                  className="hover:scale-125 transition-all"
                  target="_blank"
                >
                  <div className="md:p-2 w-36 h-36 md:w-40 md:h-40 shrink-0">
                    <Image
                      src={project.icon}
                      alt={project.title}
                      width={300}
                      height={300}
                    />
                  </div>
                </a>
                <div>
                  <h3 className="font-semibold text-xl">
                    {" "}
                    <a href={project.path} className="item-title">
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 leading-relaxed text-[14px] md:text-[18px] text-[#ffffFF92]">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div
        className="flex flex-col gap-2 mx-auto mt-20 w-full"
        data-aos="fade-up"
      >
        <Card className="bg-[#1b1931] text-white md:w-[60%] w-[95%] mx-auto md:p-10 p-3 rounded-sm">
          <h1 className="heading">
            Common Core <span className="text-yellow-400">Curriculum 42</span>
          </h1>

          <CardBody className="text-[#ffffFF92]">
            <Image
              src="/images/human-coder.png"
              alt="Human Coder"
              width={300}
              height={300}
              className="mx-auto p-4"
            />
            <p className="text-xl font-bold">Fundamentos de Programação:</p>
            <ul className="item-ul">
              <li>Aprofundamento no entendimento das linguagens C e C++.</li>
              <li>
                Recodificação de funções da biblioteca padrão e criação de
                funções utilitárias (Libft).
              </li>
            </ul>
            <p className="text-xl font-bold">
              Técnicas Avançadas de Programação:
            </p>
            <ul className="item-ul">
              <li>
                Desenvolvimento de algoritmos complexos para classificação
                otimizada de dados (Push Swap).
              </li>
              <li>
                Manipulação de múltiplas estruturas de dados e eficiência
                algorítmica.
              </li>
            </ul>
            <p className="text-xl font-bold">Engenharia de Software:</p>
            <ul className="item-ul">
              <li>
                Construção de aplicações completas, como servidores HTTP e
                plataformas de jogos.
              </li>
              <li>
                Implementação de metodologias de software, como I/O Multiplexing
                (Webserv).
              </li>
            </ul>
            <p className="text-xl font-bold">
              Desenvolvimento Web e Aplicações em Rede:
            </p>
            <ul className="item-ul">
              <li>
                Programação de interfaces e aplicações web utilizando HTML, CSS,
                JavaScript, e frameworks modernos como Svelte
                (ft_transcendence).
              </li>
              <li>
                Configuração e gerenciamento de redes, entendimento profundo de
                TCP/IP (NetPractice).
              </li>
            </ul>
            <p className="text-xl font-bold">
              Gerenciamento de Sistemas e Infraestrutura:
            </p>
            <ul className="item-ul">
              <li>
                Criação e gestão de máquinas virtuais, servidores SSH, e regras
                de firewall (Born2beroot).
              </li>
              <li>
                Utilização de Docker para construção de infraestruturas de
                serviços e orquestração com Docker Compose (Inception).
              </li>
            </ul>
            <p className="text-xl font-bold">
              Desenvolvimento de Jogos e Gráficos Computacionais:
            </p>
            <ul className="item-ul">
              <li>
                Desenvolvimento de jogos 2D e entendimento de gráficos
                computacionais usando bibliotecas como MiniLibX (So_long,
                Cub3D).
              </li>
            </ul>
            <p className="text-xl font-bold">Multithreading e Concorrência:</p>
            <ul className="item-ul">
              <li>
                Gestão de múltiplos threads e processos, utilizando mutexes para
                resolver problemas de concorrência e sincronização, como o
                problema do Jantar dos Filósofos (Philosopher).
              </li>
            </ul>
            <p className="text-xl font-bold">
              Design de Software e Arquitetura de Sistemas:
            </p>
            <ul className="item-ul">
              <li>
                Implementação de arquiteturas de software robustas e design de
                sistemas complexos, como a criação de uma versão própria da
                função printf e a reimplementação de contêineres STL em C++.
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Projects42;
