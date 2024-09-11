import style from "./Projects.module.scss";

const graduations = [
  {
    title: "Aplicação ERP Web para Microempreendedores",
    description:
      "Desenvolvi um ERP Web focado na gestão de microempreendedores, abrangendo controle de produtos, clientes e fornecedores. Implementei um PDV rápido e ferramentas de análise de vendas com gráficos.",
    skills: ["Java Spring Boot", "React.js", "Azure", "NGINX", "AWS (EC2)", "Load Balance"],
  },
  {
    title: "Aplicação de Monitoramento de Hardware",
    description:
      "Desenvolvi uma aplicação desktop para monitoramento em tempo real de hardware, com alertas automáticos para uso excessivo de recursos. A aplicação notifica o usuário via Slack sobre o desempenho de CPU, memória RAM, espaço em disco e GPU.",
    skills: ["Java 8", "React.js", "Maven", "Azure"],
  },
  {
    title: "Aplicação de Monitoramento de Consumo de Energia",
    description: "Desenvolvi uma aplicação que monitora o consumo de energia e otimiza o uso de eletricidade, incluindo controle de brilho de lâmpadas com base na luz natural. ",
    skills: ["Node.js", "React.js", "Azure", "Arduino"],
  },
];

function Projects() {
  return (
    <div className={style.container}>
      {graduations.map((graduation, index) => (
        <div key={index} className={style.box}>
          <div className={style.informations}>
            <p className={style.title}>{graduation.title}</p>
            <p className={style.description}>{graduation.description}</p>
          </div>
          <div className={style.tags}>
            {graduation.skills.map((skill, index) => (
                <div key={index} className={style.tagTech}>{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
