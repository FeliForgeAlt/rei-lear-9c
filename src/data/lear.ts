export const beats = [
  {
    n: "01",
    title: "O teste do amor",
    text: "Lear, já idoso e cansado de governar, decide dividir o reino entre as três filhas — Goneril, Regana e Cordélia. Quer ficar só com o título de rei e com um grupo de cavaleiros. Antes de entregar as terras, exige um discurso público: cada filha deve dizer o quanto o ama. Quem falar com mais força leva a maior parte.",
  },
  {
    n: "02",
    title: "A palavra e o castigo",
    text: "Goneril e Regana fazem declarações exageradas e recebem o reino. Cordélia se recusa a transformar amor em espetáculo. Diz que ama o pai como uma filha deve amar: nem mais, nem menos. Lear lê isso como frieza. No orgulho, deserdou Cordélia e reparte a parte dela entre as irmãs. O conde de Kent tenta impedir a injustiça e também é banido. O duque de Borgonha desiste do casamento quando vê que ela ficou sem dote. O rei da França, ao contrário, casa-se com Cordélia justamente porque reconhece o valor dela.",
  },
  {
    n: "03",
    title: "O rei sem casa",
    text: "Com o poder nas mãos, Goneril e Regana mostram quem são. Acham o pai incômodo, reduzem o séquito dele e o tratam com desprezo. Lear vai de um castelo a outro e em nenhum é bem-vindo. O orgulho se quebra: ele começa a perceber que premiou a lisonja e expulsou a única filha sincera. Kent volta disfarçado de criado para continuar ao lado do rei. O bobo da corte acompanha Lear e, com piadas afiadas, diz o que ninguém se atreve: quem entrega a casa fica na chuva.",
  },
  {
    n: "04",
    title: "A outra família",
    text: "Em paralelo, o conde de Gloucester repete o mesmo erro. Ele tem dois filhos: Edgar, o legítimo, e Edmundo, o bastardo, criado à margem e cheio de ressentimento. Edmundo forja uma carta e convence o pai de que Edgar planeja matá-lo para ficar com a herança. Edgar foge e se disfarça de mendigo, “Tom, o pobre”. Edmundo sobe na confiança do pai e, depois, na dos poderosos. Duas famílias, o mesmo engano: o pai acredita no falso e persegue o verdadeiro.",
  },
  {
    n: "05",
    title: "Tempestade e cegueira",
    text: "Expulso pelas filhas, Lear atravessa a charneca no meio de uma tempestade, com o bobo e com Kent. O vento funciona como espelho: lá fora, o caos; dentro dele, a loucura. O rei que mandava em todos passa a sentir frio, fome e abandono. Gloucester, por ajudar Lear, é punido com crueldade: Regana e o duque da Cornualha mandam cegá-lo. Cego de fato, passa a ser guiado por Edgar — o filho que ele havia condenado, ainda sem saber quem o conduz. A cegueira do corpo torna visível a cegueira moral que já existia.",
  },
  {
    n: "06",
    title: "O reencontro e a guerra",
    text: "Cordélia, agora rainha da França, volta com um exército para socorrer o pai, não para tomar o trono por ambição. Os dois se reencontram. Lear, mais lúcido e humilde, pede perdão. É o único momento de ternura firme da história — e dura pouco. As forças de Goneril, Regana e Edmundo vencem a guerra. Lear e Cordélia são presos.",
  },
  {
    n: "07",
    title: "O desfecho trágico",
    text: "Edmundo manda, em segredo, matar Cordélia. Goneril e Regana, rivais pelo amor dele, se destroem: Goneril envenena a irmã e depois se mata. Edgar enfrenta Edmundo em duelo e o fere de morte. Arrependido tarde demais, Edmundo tenta cancelar a ordem contra Cordélia, mas o aviso não chega a tempo. Lear entra com o corpo da filha e morre de dor. Gloucester também não sobrevive ao choque de saber a verdade sobre os filhos. Sobram os leais — sobretudo Edgar e o duque de Albany — diante de um reino arrasado. O mal é punido, mas o bem também paga. Não há final feliz.",
  },
] as const;

export type House = "lear" | "gloucester" | "corte";

export const houses: { id: House | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "lear", label: "Casa de Lear" },
  { id: "gloucester", label: "Casa de Gloucester" },
  { id: "corte", label: "Corte" },
];

export const people: {
  name: string;
  role: string;
  house: House;
  tag: string;
  text: string;
}[] = [
  {
    name: "Rei Lear",
    role: "Protagonista",
    house: "lear",
    tag: "Orgulho",
    text: "Rei idoso, autoritário e vaidoso. Quer largar o peso de governar sem largar o prazer de ser adorado. Confunde discurso bonito com amor e só enxerga o próprio erro quando já perdeu o poder, a casa e a razão. Morre ao ver Cordélia morta — no instante em que finalmente aprendeu a amar sem exigir plateia.",
  },
  {
    name: "Cordélia",
    role: "Filha mais nova",
    house: "lear",
    tag: "Verdade",
    text: "Honesta até a dureza. Recusa a bajulação e é castigada por isso. Casa-se com o rei da França sem dote e volta, mais tarde, para salvar o pai. Representa o amor que não se mede em palavras. Morre inocente: a tragédia mostra que a virtude não garante sobrevivência.",
  },
  {
    name: "Goneril",
    role: "Filha mais velha",
    house: "lear",
    tag: "Ambição",
    text: "Casada com o duque de Albany. Calculista: fala exatamente o que o pai quer ouvir e, no poder, revela crueldade. Reduz o séquito de Lear, alia-se a Edmundo e entra em disputa com a própria irmã. Envenena Regana e se mata. É a prova de que a lisonja era só estratégia.",
  },
  {
    name: "Regana",
    role: "Filha do meio",
    house: "lear",
    tag: "Crueldade",
    text: "Casada com o duque da Cornualha. Tão ambiciosa quanto Goneril e, em vários momentos, ainda mais dura. Participa da humilhação do pai e da ordem de cegar Gloucester. Rivaliza com a irmã por Edmundo e morre envenenada por Goneril.",
  },
  {
    name: "Conde de Kent",
    role: "Conselheiro leal",
    house: "corte",
    tag: "Lealdade",
    text: "Fala a verdade mesmo sabendo o preço. É banido por defender Cordélia e volta disfarçado para servir Lear. É o modelo de fidelidade que o rei não soube reconhecer a tempo. No fim, enlutado, não deseja permanecer na corte.",
  },
  {
    name: "O Bobo",
    role: "Bobo da corte",
    house: "corte",
    tag: "Lucidez",
    text: "Parece só fazer graça, mas é quem diz a verdade com mais clareza. Acompanha Lear na tempestade e não abandona o rei quando os poderosos o abandonam. Na tragédia, o “louco” oficial muitas vezes é o único lúcido.",
  },
  {
    name: "Conde de Gloucester",
    role: "Nobre, pai de Edgar e Edmundo",
    house: "gloucester",
    tag: "Cegueira",
    text: "Repete, na outra família, o erro de Lear. Enganado por uma carta falsa, condena o filho leal e protege o traidor. Ao ajudar o rei, é cegado. Aprende a “ver” só depois de perder os olhos — e morre ao descobrir quem de fato o amava.",
  },
  {
    name: "Edgar",
    role: "Filho legítimo de Gloucester",
    house: "gloucester",
    tag: "Resistência",
    text: "Injustiçado, sobrevive disfarçado de mendigo (“Tom, o pobre”) e cuida do pai cego sem ser reconhecido. No fim, enfrenta Edmundo em duelo. Resta como uma das vozes que podem recompor o reino. É o paralelo de Cordélia: o filho verdadeiro, rejeitado.",
  },
  {
    name: "Edmundo",
    role: "Filho bastardo de Gloucester",
    house: "gloucester",
    tag: "Mentira",
    text: "Inteligente, ressentido e sem escrúpulo. Usa a mentira como escada: derruba o irmão, trai o pai e se alia a Goneril e Regana. Não é filho de Lear — essa troca de famílias é a pegadinha mais comum da prova. Quase se arrepende, mas só quando já é tarde.",
  },
  {
    name: "Duque de Albany",
    role: "Marido de Goneril",
    house: "corte",
    tag: "Limite",
    text: "No começo, omisso diante da esposa. Conforme a crueldade aumenta, recua e se coloca contra Edmundo. Sobrevive à tragédia e fica entre os que herdam um reino devastado, não uma vitória gloriosa.",
  },
  {
    name: "Duque da Cornualha",
    role: "Marido de Regana",
    house: "corte",
    tag: "Violência",
    text: "É o braço violento do casal. Executa a cegueira de Gloucester e morre pouco depois, ferido por um servo que não suporta aquela crueldade. Mostra que o poder abusivo também encontra limite — tarde, e à custa de sangue.",
  },
  {
    name: "Rei da França",
    role: "Marido de Cordélia",
    house: "corte",
    tag: "Reconhecimento",
    text: "Aceita Cordélia sem terras nem dote, porque vê nela o que Lear não viu. Contrasta com o duque de Borgonha, que só queria a herança. O retorno de Cordélia à Bretanha, com tropas, parte desse casamento.",
  },
];

export const themes = [
  {
    title: "Que tipo de texto é este?",
    body: "A obra original é uma tragédia teatral: um protagonista de alta posição comete um erro grave, cai, sofre, e o desfecho é de morte — não de reconciliação feliz. A edição de Hildegard Feist traduz e adapta essa peça para uma narrativa em prosa, mais direta, da série Reencontro (Scipione), com ilustrações de Augusto Sampaio. Na prova, diga as duas coisas: o gênero de origem é tragédia; o livro da turma é uma adaptação em prosa para leitores jovens. Feist não inventou a história. Ela recontou Shakespeare.",
  },
  {
    title: "O erro de Lear não é a velhice",
    body: "O erro (o que no teatro se chama hamartia) é confundir discurso com amor e usar o poder para exigir carinho em público. Lear quer se aposentar do reino, mas não do orgulho. Quem o bajula é premiado; quem o ama de verdade é punido. Quase toda desgraça da obra nasce dessa escolha. Velhice, na história, é o momento em que o rei já não aguenta o peso do trono — não é, por si só, a causa da tragédia.",
  },
  {
    title: "Duas histórias que se espelham",
    body: "A adaptação conta duas famílias ao mesmo tempo. Lear julga as filhas pelas palavras. Gloucester julga os filhos por uma carta falsa. As tramas avançam juntas para o leitor comparar. Nos dois casos, o pai “cego” rejeita o filho leal e confia no interesseiro. Gloucester chega a ficar cego de fato: a imagem concreta do tema. Se a questão pedir “estrutura da obra”, fale nessa trama dupla.",
  },
  {
    title: "Aparência e essência",
    body: "Goneril e Regana dominam a aparência: fala bonita, gesto de filha obediente. Cordélia parece fria e é a única constante. Edmundo parece o filho dedicado e é o traidor. Kent e Edgar precisam de disfarce para fazer o bem num mundo em que a verdade nua é expulsa. Ideia forte para redação: nesta história, quem fala demais esconde; quem parece pouco pode ser o que há de mais firme.",
  },
  {
    title: "Loucura, bobo e tempestade",
    body: "A tempestade na charneca não é só cenário. É símbolo da desordem do reino e da mente do rei. Quando Lear enlouquece, passa a fazer perguntas que um rei vaidoso nunca faria — por exemplo, o que sente alguém sem teto debaixo de chuva. A loucura, então, também é um caminho de conhecimento. O bobo já ocupava esse lugar: diz a verdade protegido pela função de fazer rir. Na prova, não trate o bobo como “alívio cômico” apenas. Ele é comentário da obra.",
  },
  {
    title: "Poder e ressentimento",
    body: "Edmundo não é “mau por natureza” de um jeito simples. A corte o humilha por ser filho bastardo, e ele transforma essa ferida em ambição sem limite. Dá para discutir em aula — sem justificar os crimes — que o vilão também é produto de uma ordem injusta. Goneril e Regana, porém, já tinham status e mesmo assim querem mais. A obra mostra duas fomes de poder: a de quem foi excluído e a de quem nunca se contenta.",
  },
  {
    title: "Por que o final dói",
    body: "Se só os vilões morressem, seria um conto moral com justiça completa. Shakespeare recusa isso, e a adaptação mantém a recusa. Cordélia morre inocente. Lear morre quando finalmente aprendeu a amar direito. O efeito tem nome: catarse, a mistura de pena e medo que a tragédia provoca, sem alívio fácil. A lição não é “seja bonzinho e tudo dá certo”. É mais dura: o orgulho custa caro, e a verdade, sozinha, nem sempre chega a tempo.",
  },
];

export const readyPhrases = [
  "Lear divide o reino segundo a bajulação, não segundo a justiça.",
  "Cordélia recusa o teatro do amor e por isso é deserdada.",
  "A história de Gloucester e dos filhos repete, em espelho, o erro de Lear.",
  "A tempestade e a loucura mostram o rei confrontado com a verdade.",
  "O desfecho é trágico porque a inocência de Cordélia também é destruída.",
];

export const vocab: { word: string; def: string }[] = [
  {
    word: "Lisonja",
    def: "Elogio interessado, feito para agradar e obter vantagem. É o que Goneril e Regana oferecem no lugar de amor.",
  },
  {
    word: "Séquito",
    def: "O grupo de cavaleiros e acompanhantes do rei. Reduzir o séquito de Lear é tirar dele o último sinal de poder.",
  },
  {
    word: "Deserdar",
    def: "Excluir alguém da herança. Lear deserdou Cordélia e ainda a trata como ingrata.",
  },
  {
    word: "Bastardo e legítimo",
    def: "Na lógica da corte, o filho nascido fora do casamento (Edmundo) não herda como o filho do casamento (Edgar). Edmundo odeia essa regra e a usa como motor da trama.",
  },
  {
    word: "Charneca",
    def: "Campo aberto, pobre e exposto ao tempo. É onde Lear enfrenta a tempestade, longe do palácio.",
  },
  {
    word: "Tragédia",
    def: "Gênero em que uma falha grave do protagonista leva à queda e, em geral, à morte. Não se conserta com um casamento feliz no último minuto.",
  },
  {
    word: "Hamartia",
    def: "O erro do herói trágico. Em Lear, é o orgulho que o faz medir amor por discurso.",
  },
  {
    word: "Catarse",
    def: "O efeito da tragédia sobre quem lê ou assiste: pena e medo, que fazem pensar — não um final que deixa tudo “no lugar”.",
  },
  {
    word: "Justiça poética",
    def: "Quando cada um recebe, na história, o que “merece”. Rei Lear só cumpre isso pela metade: os cruéis caem, mas Cordélia também morre.",
  },
  {
    word: "Adaptação",
    def: "Reconto de uma obra para outro público ou outra forma. Aqui, a peça em verso vira prosa acessível, sem deixar de ser a tragédia de Shakespeare.",
  },
];

export const traps = [
  {
    wrong: "Edmundo é filho de Lear.",
    right: "Edmundo é filho de Gloucester. Os filhos de Lear são Goneril, Regana e Cordélia.",
  },
  {
    wrong: "Cordélia trai o pai.",
    right: "Cordélia recusa a bajulação. Quem trai são Goneril e Regana, depois de receber o poder.",
  },
  {
    wrong: "O livro é uma obra original de Hildegard Feist.",
    right: "A história é de William Shakespeare. Feist fez a tradução e a adaptação em prosa para a série Reencontro.",
  },
  {
    wrong: "O final recompensa os bons e pune só os maus.",
    right: "Goneril, Regana e Edmundo caem, mas Cordélia e Lear também morrem. Por isso é tragédia, não fábula.",
  },
];

export const blanks: { prompt: string; answer: string }[] = [
  {
    prompt: "Lear divide o reino pedindo que cada filha declare o quanto o ______.",
    answer: "ama",
  },
  {
    prompt: "A filha que fala a verdade e é deserdada se chama ______.",
    answer: "Cordélia",
  },
  {
    prompt: "O conselheiro banido por defender essa filha é o conde de ______.",
    answer: "Kent",
  },
  {
    prompt: "O filho bastardo de Gloucester, autor da carta falsa, se chama ______.",
    answer: "Edmundo",
  },
  {
    prompt: "Na charneca, a ______ simboliza o caos da mente de Lear e do reino.",
    answer: "tempestade",
  },
  {
    prompt: "Quem volta da França com um exército para socorrer o pai é ______.",
    answer: "Cordélia",
  },
];

export const questions: {
  prompt: string;
  options: string[];
  answer: number;
  why: string;
}[] = [
  {
    prompt: "Por que Lear decide dividir o reino?",
    options: [
      "Porque perdeu uma guerra para a França.",
      "Porque quer deixar o governo e medir o amor das filhas em público.",
      "Porque Cordélia exigiu a maior parte das terras.",
      "Porque Gloucester o aconselhou a testar os filhos dele.",
    ],
    answer: 1,
    why: "Lear está cansado do peso do trono, mas ainda quer o título e a adoração. A divisão vira um concurso de discursos.",
  },
  {
    prompt: "O que Cordélia faz no teste do amor?",
    options: [
      "Promete amar o pai mais do que as irmãs e ganha o melhor quinhão.",
      "Recusa-se a bajular e diz que ama o pai como uma filha deve amar.",
      "Alia-se a Edmundo para tomar o trono.",
      "Fica em silêncio porque não ama o pai.",
    ],
    answer: 1,
    why: "Cordélia ama, mas não entra no jogo de palavras vazias. Lear confunde essa honestidade com frieza e a deserdou.",
  },
  {
    prompt: "Quem é Edmundo?",
    options: [
      "O filho mais novo de Lear.",
      "O marido de Cordélia.",
      "O filho bastardo de Gloucester, que trama contra o pai e o irmão.",
      "O bobo da corte disfarçado.",
    ],
    answer: 2,
    why: "Essa é a confusão mais comum. A trama de Edmundo espelha a de Lear, mas acontece na família de Gloucester. Edgar é o irmão legítimo.",
  },
  {
    prompt: "Por que Kent é banido?",
    options: [
      "Porque forjou uma carta contra Edgar.",
      "Porque defendeu Cordélia e enfrentou a decisão injusta do rei.",
      "Porque se aliou ao duque da Cornualha.",
      "Porque recusou servir no séquito de Goneril.",
    ],
    answer: 1,
    why: "Kent é leal demais para aplaudir o erro de Lear. Banido, volta disfarçado. Lealdade, na obra, tem custo.",
  },
  {
    prompt: "O que a tempestade na charneca representa?",
    options: [
      "Só um acidente de clima, sem relação com a história.",
      "A invasão do rei da França.",
      "O caos interior de Lear e a desordem do reino que ele mesmo provocou.",
      "O casamento de Regana.",
    ],
    answer: 2,
    why: "Cenário e personagem se misturam. Lá fora, a tormenta; dentro do rei, a loucura que também começa a revelar a verdade.",
  },
  {
    prompt: "O que acontece com Gloucester por ajudar Lear?",
    options: [
      "Ganha metade do reino.",
      "É cegado por ordem de Regana e do duque da Cornualha.",
      "Foge para a França com Cordélia.",
      "Descobre logo a carta falsa e perdoa Edgar na mesma cena.",
    ],
    answer: 1,
    why: "A cegueira física repete a cegueira moral: Gloucester não soube “ver” qual filho era leal. Depois, é Edgar quem o guia.",
  },
  {
    prompt: "Como a história termina?",
    options: [
      "Cordélia vence a guerra e Lear volta ao trono.",
      "Lear perdoa as três filhas e o reino se pacifica.",
      "Cordélia é morta por ordem de Edmundo; Lear morre de dor ao encontrá-la.",
      "O bobo assume a coroa.",
    ],
    answer: 2,
    why: "Goneril mata Regana e se mata; Edgar fere Edmundo. O aviso para salvar Cordélia chega tarde. Sem essa morte, não seria a tragédia que é.",
  },
  {
    prompt: "Qual frase resume melhor a obra para uma resposta de prova?",
    options: [
      "A velhice sempre torna os pais ingratos.",
      "Bajulação não é amor, e o orgulho de Lear destrói a família e o reino.",
      "O filho bastardo é sempre o vilão, e o legítimo é sempre bom sem motivo.",
      "A adaptação de Feist muda o final para poupar Cordélia.",
    ],
    answer: 1,
    why: "O centro é a diferença entre palavra e verdade, com a trama espelhada de Gloucester. A adaptação facilita a leitura; não troca o desfecho trágico.",
  },
];

export const talk = [
  "Cordélia errou ao não dizer o que o pai queria ouvir? Honestidade sem cuidado também fere — ou o erro foi só de Lear?",
  "Lear fica louco ou, na loucura, finalmente enxerga? Use a tempestade e o bobo na resposta.",
  "Edmundo é apenas vilão, ou a corte também criou o ressentimento dele ao tratá-lo como inferior?",
  "O final é justo? Quem paga o preço dos erros de Lear — e por que Cordélia não é salva?",
];

export const oral =
  "Rei Lear, na adaptação de Hildegard Feist, reconta a tragédia de Shakespeare. O rei, já velho, divide o reino entre as filhas e pede que cada uma diga o quanto o ama. Goneril e Regana exageram e ganham tudo. Cordélia fala a verdade e é expulsa. Depois, as filhas mais velhas humilham o pai, e ele enlouquece na tempestade. Uma história parecida acontece com Gloucester, enganado pelo filho Edmundo e salvo, sem saber, pelo filho Edgar. No fim, Cordélia volta para socorrer o pai, mas os dois morrem. A obra mostra que bajulação não é amor e que o orgulho pode destruir uma família inteira.";
