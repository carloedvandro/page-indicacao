/**
 * Documentos legais SmartVoz — Termos, Política de Privacidade e Regulamento.
 *
 * Cada documento é composto por seções editáveis. Para alterar o texto de uma
 * cláusula, basta editar o campo `corpo` aqui — sem precisar tocar no
 * componente visual (LegalDocumentLayout).
 *
 * Os textos são genéricos e profissionais, sem inventar informações jurídicas
 * nem promessas de ganho.
 */

export type SecaoLegal = {
  /** Identificador único usado como âncora no sumário (ex: "aceitacao"). */
  id: string;
  /** Número de ordem exibido (ex: "1"). */
  ordem: string;
  /** Título da cláusula. */
  titulo: string;
  /** Corpo do texto. Pode conter quebras de linha (\n). */
  corpo: string;
};

export type DocumentoLegal = {
  titulo: string;
  subtitulo?: string;
  versao: string;
  ultimaAtualizacao: string;
  /** Aviso de destaque exibido antes das seções (opcional). */
  avisoDestaque?: string;
  /** Texto do canal de privacidade (opcional, Política). */
  canalPrivacidade?: string;
  secoes: SecaoLegal[];
};

/** Data configurável pelo sistema — atualize conforme necessário. */
const DATA_ATUAL = "30 de agosto de 2026";

export const termos: DocumentoLegal = {
  titulo: "Termos e Condições de Uso da SmartVoz",
  versao: "1.0",
  ultimaAtualizacao: DATA_ATUAL,
  secoes: [
    {
      id: "aceitacao",
      ordem: "1",
      titulo: "Aceitação dos termos",
      corpo:
        "Estes Termos e Condições estabelecem as regras aplicáveis à utilização da plataforma SmartVoz, seus recursos, serviços e funcionalidades. Ao realizar cadastro, contratação ou utilizar a plataforma, o usuário declara que leu, compreendeu e concorda com as condições apresentadas.",
    },
    {
      id: "cadastro",
      ordem: "2",
      titulo: "Cadastro do usuário",
      corpo:
        "O acesso aos recursos da plataforma depende da realização de um cadastro prévio com informações válidas, verdadeiras e atualizadas. O usuário é responsável pela exatidão dos dados informados.",
    },
    {
      id: "responsabilidade-info",
      ordem: "3",
      titulo: "Responsabilidade pelas informações cadastradas",
      corpo:
        "O usuário responde pela veracidade e atualização das informações fornecidas. O fornecimento de dados falsos, incompletos ou desatualizados pode implicar restrições de acesso ou suspensão da conta.",
    },
    {
      id: "utilizacao",
      ordem: "4",
      titulo: "Utilização da plataforma",
      corpo:
        "A plataforma deve ser utilizada de forma lícita e em conformidade com estes Termos. É vedado o uso para finalidades fraudulentas, abusivas ou que violem direitos de terceiros ou a legislação aplicável.",
    },
    {
      id: "contratacoes",
      ordem: "5",
      titulo: "Contratações e pagamentos",
      corpo:
        "As contratações realizadas na plataforma estão sujeitas às condições, valores e formas de pagamento divulgados no momento da contratação. O usuário deve conferir todas as informações antes de concluir o processo.",
    },
    {
      id: "servicos",
      ordem: "6",
      titulo: "Serviços disponibilizados",
      corpo:
        "A SmartVoz disponibiliza serviços e recursos que podem ser atualizados, ampliados ou ajustados ao longo do tempo, sempre buscando a melhoria contínua da experiência oferecida.",
    },
    {
      id: "indicacao",
      ordem: "7",
      titulo: "Programa de indicação",
      corpo:
        "O programa de indicação possui regras próprias detalhadas no Regulamento do Programa, incluindo critérios de elegibilidade, formação da rede e condições para geração de benefícios.",
    },
    {
      id: "beneficios",
      ordem: "8",
      titulo: "Benefícios e comissões elegíveis",
      corpo:
        "Benefícios e comissões são disponibilizados conforme as regras do programa e dependem do atendimento aos critérios de elegibilidade. Não há garantia de rendimento.",
    },
    {
      id: "condutas-proibidas",
      ordem: "9",
      titulo: "Condutas proibidas",
      corpo:
        "São vedadas práticas como fraude, manipulação de indicações, uso indevido da marca e qualquer conduta que viole estes Termos ou a legislação aplicável.",
    },
    {
      id: "seguranca-conta",
      ordem: "10",
      titulo: "Segurança da conta",
      corpo:
        "O usuário deve manter a confidencialidade de seus dados de acesso e adotar medidas razoáveis para proteger sua conta, comunicando imediatamente qualquer uso indevido.",
    },
    {
      id: "suspensao",
      ordem: "11",
      titulo: "Suspensão e cancelamento",
      corpo:
        "A SmartVoz poderá suspender ou cancelar contas em caso de descumprimento destes Termos, mediante comunicação ao usuário, respeitadas as condições aplicáveis.",
    },
    {
      id: "comunicacoes",
      ordem: "12",
      titulo: "Comunicações eletrônicas",
      corpo:
        "As comunicações entre a SmartVoz e o usuário podem ocorrer por meios eletrônicos, sendo consideradas válidas para todos os fins legais.",
    },
    {
      id: "propriedade-intelectual",
      ordem: "13",
      titulo: "Propriedade intelectual",
      corpo:
        "Os elementos da plataforma, incluindo marcas, logotipos, conteúdos e funcionalidades, são protegidos por direitos de propriedade intelectual. É vedada a reprodução não autorizada.",
    },
    {
      id: "responsabilidades",
      ordem: "14",
      titulo: "Responsabilidades das partes",
      corpo:
        "Cada parte é responsável pelo cumprimento de suas obrigações nestes Termos. A SmartVoz busca oferecer um ambiente seguro e funcional, sem garantir ausência absoluta de interrupções.",
    },
    {
      id: "alteracoes",
      ordem: "15",
      titulo: "Alterações dos termos",
      corpo:
        "Estes Termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível na plataforma, com a respectiva data de atualização.",
    },
    {
      id: "legislacao",
      ordem: "16",
      titulo: "Legislação aplicável",
      corpo:
        "Estes Termos são regidos pela legislação brasileira. Fica eleito o foro do domicílio do usuário para dirimir eventuais controvérsias, ressalvadas as exceções legais.",
    },
    {
      id: "atendimento",
      ordem: "17",
      titulo: "Canal de atendimento",
      corpo:
        "Para dúvidas relacionadas a estes Termos, entre em contato pelo e-mail atendimento@smartvoz.com.br.",
    },
  ],
};

export const privacidade: DocumentoLegal = {
  titulo: "Política de Privacidade SmartVoz",
  subtitulo: "Privacidade, transparência e proteção das suas informações.",
  versao: "1.0",
  ultimaAtualizacao: DATA_ATUAL,
  canalPrivacidade:
    "Para assuntos relacionados à privacidade ou proteção de dados, entre em contato pelos canais oficiais da SmartVoz.",
  secoes: [
    {
      id: "coletamos",
      ordem: "1",
      titulo: "Informações que coletamos",
      corpo:
        "A SmartVoz valoriza a privacidade e a segurança das informações de seus usuários. Esta Política explica como dados pessoais podem ser coletados, utilizados, armazenados e protegidos durante a utilização da plataforma e dos serviços SmartVoz.",
    },
    {
      id: "dados-cadastrais",
      ordem: "2",
      titulo: "Dados cadastrais",
      corpo:
        "Podem ser coletados dados fornecidos pelo usuário no momento do cadastro, como nome, documento, telefone e e-mail, necessários à prestação dos serviços.",
    },
    {
      id: "dados-acesso",
      ordem: "3",
      titulo: "Dados de acesso e dispositivo",
      corpo:
        "Podem ser registrados dados de acesso e de dispositivo, como endereço IP e informações de navegador, com finalidade de segurança e melhoria da experiência.",
    },
    {
      id: "finalidades",
      ordem: "4",
      titulo: "Finalidades do tratamento",
      corpo:
        "As informações são tratadas para viabilizar a prestação dos serviços, atendimento, segurança, cumprimento de obrigações legais e melhoria contínua da plataforma.",
    },
    {
      id: "seguranca-fraudes",
      ordem: "5",
      titulo: "Segurança e prevenção a fraudes",
      corpo:
        "Adotamos medidas técnicas e organizacionais para proteger as informações e prevenir fraudes, considerando a natureza dos dados e os riscos envolvidos.",
    },
    {
      id: "prestadores",
      ordem: "6",
      titulo: "Prestadores e parceiros necessários à operação",
      corpo:
        "Podemos compartilhar dados com prestadores e parceiros estritamente necessários à operação dos serviços, sempre sob compromissos de confidencialidade e segurança.",
    },
    {
      id: "armazenamento",
      ordem: "7",
      titulo: "Armazenamento das informações",
      corpo:
        "As informações são armazenadas pelo tempo necessário ao cumprimento das finalidades descritas e às obrigações legais aplicáveis.",
    },
    {
      id: "cookies",
      ordem: "8",
      titulo: "Cookies e tecnologias semelhantes",
      corpo:
        "Podemos utilizar cookies e tecnologias semelhantes para melhorar a experiência, a segurança e a funcionalidade da plataforma, respeitando as preferências do usuário.",
    },
    {
      id: "direitos",
      ordem: "9",
      titulo: "Direitos do titular",
      corpo:
        "O titular dos dados pode exercer seus direitos, como acesso, correção e portabilidade, mediante solicitação pelos canais oficiais de atendimento.",
    },
    {
      id: "atualizacao-dados",
      ordem: "10",
      titulo: "Atualização de dados",
      corpo:
        "O usuário pode manter seus dados atualizados por meio da plataforma ou solicitando ao atendimento, contribuindo para a exatidão das informações.",
    },
    {
      id: "exclusao-retencao",
      ordem: "11",
      titulo: "Exclusão e retenção",
      corpo:
        "A exclusão ou retenção de dados observa as finalidades de tratamento e as obrigações legais aplicáveis, podendo haver retenção por prazo legal mesmo após solicitação de exclusão.",
    },
    {
      id: "seguranca-info",
      ordem: "12",
      titulo: "Segurança da informação",
      corpo:
        "Mantemos práticas de segurança da informação alinhadas às boas práticas, buscando proteger os dados contra acessos não autorizados e incidentes.",
    },
    {
      id: "alteracoes-politica",
      ordem: "13",
      titulo: "Alterações desta política",
      corpo:
        "Esta Política pode ser atualizada periodicamente. A versão vigente estará sempre disponível na plataforma, com a respectiva data de atualização.",
    },
    {
      id: "canal-privacidade",
      ordem: "14",
      titulo: "Canal de privacidade",
      corpo:
        "Para assuntos relacionados à privacidade ou proteção de dados, entre em contato pelos canais oficiais da SmartVoz.",
    },
  ],
};

export const regulamento: DocumentoLegal = {
  titulo: "Regulamento do Programa de Indicação SmartVoz",
  versao: "1.0",
  ultimaAtualizacao: DATA_ATUAL,
  avisoDestaque:
    "A participação no programa não representa garantia de rendimento. Os valores recebidos dependem das indicações efetivamente elegíveis e do cumprimento das condições estabelecidas neste Regulamento.",
  secoes: [
    {
      id: "objetivo",
      ordem: "1",
      titulo: "Objetivo do programa",
      corpo:
        "Este Regulamento estabelece as regras de participação no Programa de Indicação SmartVoz, incluindo critérios de elegibilidade, indicações, formação da rede, benefícios e comissões.",
    },
    {
      id: "quem-pode",
      ordem: "2",
      titulo: "Quem pode participar",
      corpo:
        "Podem participar usuários cadastrados e elegíveis, em conformidade com as condições previstas neste Regulamento.",
    },
    {
      id: "cadastro-elegibilidade",
      ordem: "3",
      titulo: "Cadastro e elegibilidade",
      corpo:
        "A participação depende de cadastro ativo e do atendimento aos critérios de elegibilidade definidos pela SmartVoz, que podem ser atualizados conforme as regras vigentes.",
    },
    {
      id: "indicacao-direta",
      ordem: "4",
      titulo: "Indicação direta",
      corpo:
        "A indicação direta é realizada por meio de link ou código individual disponibilizado ao participante elegível dentro da plataforma.",
    },
    {
      id: "identificacao",
      ordem: "5",
      titulo: "Identificação das indicações",
      corpo:
        "As indicações são identificadas pelo sistema por meio do link ou código do participante, observados os critérios de validação previstos.",
    },
    {
      id: "formacao-rede",
      ordem: "6",
      titulo: "Formação da rede",
      corpo:
        "A rede é formada a partir das indicações realizadas pelo participante e pelas indicações feitas por seus indicados, observados os níveis previstos.",
    },
    {
      id: "niveis",
      ordem: "7",
      titulo: "Níveis do programa",
      corpo:
        "O programa prevê níveis de rede conforme definido nas regras vigentes, com condições específicas para cada nível.",
    },
    {
      id: "criterios-comissao",
      ordem: "8",
      titulo: "Critérios para geração de comissão",
      corpo:
        "A geração de comissões depende do atendimento aos critérios de elegibilidade das indicações e das condições estabelecidas neste Regulamento.",
    },
    {
      id: "comissao-recorrente",
      ordem: "9",
      titulo: "Comissão recorrente",
      corpo:
        "Comissões recorrentes podem ser geradas enquanto as condições de elegibilidade forem atendidas, conforme as regras do programa.",
    },
    {
      id: "processamento",
      ordem: "10",
      titulo: "Processamento dos valores",
      corpo:
        "Os valores são processados conforme os critérios e prazos definidos pela SmartVoz, podendo haver etapas de validação antes da disponibilização.",
    },
    {
      id: "disponibilizacao",
      ordem: "11",
      titulo: "Disponibilização dos valores",
      corpo:
        "Os valores disponibilizados seguem as formas e prazos definidos pela SmartVoz, observadas as regras vigentes.",
    },
    {
      id: "cancelamentos-estornos",
      ordem: "12",
      titulo: "Cancelamentos e estornos",
      corpo:
        "Cancelamentos ou estornos podem impactar valores gerados, conforme as condições previstas neste Regulamento.",
    },
    {
      id: "inadimplencia",
      ordem: "13",
      titulo: "Inadimplência",
      corpo:
        "A inadimplência de clientes indicados pode afetar a elegibilidade de comissões, conforme as regras do programa.",
    },
    {
      id: "praticas-proibidas",
      ordem: "14",
      titulo: "Práticas proibidas",
      corpo:
        "São vedadas práticas como fraude, manipulação de indicações, autopatrocínio indevido e qualquer conduta que viole este Regulamento.",
    },
    {
      id: "uso-marca",
      ordem: "15",
      titulo: "Uso da marca SmartVoz",
      corpo:
        "O uso da marca SmartVoz em divulgações deve respeitar as diretrizes da empresa, sendo vedada a utilização que possa confundir ou enganar terceiros.",
    },
    {
      id: "divulgacao-responsavel",
      ordem: "16",
      titulo: "Divulgação responsável",
      corpo:
        "A divulgação deve ser realizada de forma responsável e transparente, sem promessas de ganho garantido ou informações enganosas.",
    },
    {
      id: "fraude",
      ordem: "17",
      titulo: "Fraude ou tentativa de manipulação",
      corpo:
        "Fraude ou tentativa de manipulação podem resultar em suspensão do participante e cancelamento de valores, sem prejuízo das medidas cabíveis.",
    },
    {
      id: "suspensao",
      ordem: "18",
      titulo: "Suspensão do participante",
      corpo:
        "A SmartVoz poderá suspender participantes que descumprirem este Regulamento, mediante comunicação e respeitadas as condições aplicáveis.",
    },
    {
      id: "alteracoes-regulamento",
      ordem: "19",
      titulo: "Alterações do regulamento",
      corpo:
        "Este Regulamento pode ser atualizado periodicamente. A versão vigente estará sempre disponível na plataforma, com a respectiva data de atualização.",
    },
    {
      id: "atendimento-regulamento",
      ordem: "20",
      titulo: "Atendimento",
      corpo:
        "Para dúvidas relacionadas a este Regulamento, entre em contato pelo e-mail atendimento@smartvoz.com.br.",
    },
  ],
};
