export default function initOperation() {
  const operation = document.querySelector("[data-week]");
  const dayWeek = operation.dataset.week.split(",").map(Number);
  const hourWeek = operation.dataset.hour.split(",").map(Number);

  const nowDate = new Date();
  const nowDay = nowDate.getDay();
  const hourNow = nowDate.getHours();

  const openWeek = dayWeek.indexOf(nowDay) !== -1;

  const openTime = hourNow >= hourWeek[0] && hourNow < hourWeek[1];
  if (openWeek && openTime) {
    operation.classList.add("open");
  }
}

/*const agora = new Date();
console.log(agora); // Mon Jul 18 2022 14:07:52 GMT-0300 (Horário Padrão de Brasília)
const futuro = new Date("Dec 31 2022 23:59");
console.log(futuro); // Sat Dec 24 2022 23:59:00 GMT-0300 (Horário Padrão de Brasília)

agora.getDate(); // Dia
agora.getDay(); // Dia da Semana ex: 5 = Fri
agora.getMonth(); // Número dia mês
agora.getFullYear(); // Ano
agora.getHours(); // Hora
agora.getMinutes(); // Minutos
console.log(agora.getTime()); // millisegundos desde 1970 (1658164251319)
agora.getUTCHours() - 3; // Brasília

function transformarDias(tempo) {
  return Math.floor(tempo / (24 * 60 * 60 * 1000));
}
const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());
console.log(diasFuturo - diasAgora);*/
