import prisma from "../src/prisma";

async function main() {
  // Cria o usuário
  await prisma.user.upsert({
    where: { email: "felipevieira962@gmail.com" },
    update: {},
    create: {
      email: "felipevieira962@gmail.com",
      nome: "Felipe",
      senha: "Felipe6090",
    },
  });

  // Dados dos municípios
  const municipios = [
    { id: 3200102, nome: "Afonso Cláudio" },
    { id: 3200136, nome: "Águia Branca" },
    { id: 3200169, nome: "Água Doce do Norte" },
    { id: 3200201, nome: "Alegre" },
    { id: 3200300, nome: "Alfredo Chaves" },
    { id: 3200359, nome: "Alto Rio Novo" },
    { id: 3200409, nome: "Anchieta" },
    { id: 3200508, nome: "Apiacá" },
    { id: 3200607, nome: "Aracruz" },
    { id: 3200706, nome: "Atílio Vivácqua" },
    { id: 3200805, nome: "Baixo Guandu" },
    { id: 3200904, nome: "Barra de São Francisco" },
    { id: 3201001, nome: "Boa Esperança" },
    { id: 3201100, nome: "Bom Jesus do Norte" },
    { id: 3201159, nome: "Brejetuba" },
    { id: 3201209, nome: "Cachoeiro de Itapemirim" },
    { id: 3201308, nome: "Cariacica" },
    { id: 3201407, nome: "Castelo" },
    { id: 3201506, nome: "Colatina" },
    { id: 3201605, nome: "Conceição da Barra" },
    { id: 3201704, nome: "Conceição do Castelo" },
    { id: 3201803, nome: "Divino de São Lourenço" },
    { id: 3201902, nome: "Domingos Martins" },
    { id: 3202009, nome: "Dores do Rio Preto" },
    { id: 3202108, nome: "Ecoporanga" },
    { id: 3202207, nome: "Fundão" },
    { id: 3202256, nome: "Governador Lindenberg" },
    { id: 3202306, nome: "Guaçuí" },
    { id: 3202405, nome: "Guarapari" },
    { id: 3202454, nome: "Ibatiba" },
    { id: 3202504, nome: "Ibiraçu" },
    { id: 3202553, nome: "Ibitirama" },
    { id: 3202603, nome: "Iconha" },
    { id: 3202652, nome: "Irupi" },
    { id: 3202702, nome: "Itaguaçu" },
    { id: 3202801, nome: "Itapemirim" },
    { id: 3202900, nome: "Itarana" },
    { id: 3203007, nome: "Iúna" },
    { id: 3203056, nome: "Jaguaré" },
    { id: 3203106, nome: "Jerônimo Monteiro" },
    { id: 3203130, nome: "João Neiva" },
    { id: 3203163, nome: "Laranja da Terra" },
    { id: 3203205, nome: "Linhares" },
    { id: 3203304, nome: "Mantenópolis" },
    { id: 3203320, nome: "Marataízes" },
    { id: 3203346, nome: "Marechal Floriano" },
    { id: 3203353, nome: "Marilândia" },
    { id: 3203403, nome: "Mimoso do Sul" },
    { id: 3203502, nome: "Montanha" },
    { id: 3203601, nome: "Mucurici" },
    { id: 3203700, nome: "Muniz Freire" },
    { id: 3203809, nome: "Muqui" },
    { id: 3203908, nome: "Nova Venécia" },
    { id: 3204005, nome: "Pancas" },
    { id: 3204054, nome: "Pedro Canário" },
    { id: 3204104, nome: "Pinheiros" },
    { id: 3204203, nome: "Piúma" },
    { id: 3204252, nome: "Ponto Belo" },
    { id: 3204302, nome: "Presidente Kennedy" },
    { id: 3204351, nome: "Rio Bananal" },
    { id: 3204401, nome: "Rio Novo do Sul" },
    { id: 3204500, nome: "Santa Leopoldina" },
    { id: 3204559, nome: "Santa Maria de Jetibá" },
    { id: 3204609, nome: "Santa Teresa" },
    { id: 3204658, nome: "São Domingos do Norte" },
    { id: 3204708, nome: "São Gabriel da Palha" },
    { id: 3204807, nome: "São José do Calçado" },
    { id: 3204906, nome: "São Mateus" },
    { id: 3204955, nome: "São Roque do Canaã" },
    { id: 3205002, nome: "Serra" },
    { id: 3205010, nome: "Sooretama" },
    { id: 3205036, nome: "Vargem Alta" },
    { id: 3205069, nome: "Venda Nova do Imigrante" },
    { id: 3205101, nome: "Viana" },
    { id: 3205150, nome: "Vila Pavão" },
    { id: 3205176, nome: "Vila Valério" },
    { id: 3205200, nome: "Vila Velha" },
    { id: 3205309, nome: "Vitória" },
  ];

  // Cria os municípios
  await prisma.municipio.createMany({
    data: municipios,
    skipDuplicates: true, // Caso já exista, não lança erro
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
