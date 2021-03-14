import avatar1 from 'src/assets/avatar1.png';
import avatar2 from 'src/assets/avatar2.png';
import avatar3 from 'src/assets/avatar3.png';
import avatar4 from 'src/assets/avatar4.png';

export const DISCOVER_ITEMS = [
  {
    title: 'Engenharia de Software II',
    quote: 'Posso te ajudar com dúvidas em como fazer projetos e como estruturar seu site para a matéria.',
    price: '25.99',
    grade: 3.8,
    userInfo: { name: 'André Navarro', university: 'POLI USP', degree: 'Engenharia da Computação', avatar: avatar1 },
  },
  {
    title: 'Banco de Dados I',
    quote: 'Não quer se formar? Tá bom... Não compra então.',
    price: '20.00',
    grade: 4.2,
    userInfo: { name: 'Eduardo Prado', university: 'POLI USP', degree: 'Engenharia Elétrica', avatar: avatar4 },
  },
  {
    title: 'Anatomia',
    quote: 'Aulas práticas de estudo do corpo humano 😉',
    price: '37.99',
    grade: 4.7,
    userInfo: { name: 'Guilherme Zorzon', university: 'FSP USP', degree: 'Medicina', avatar: avatar3 },
  },
  {
    title: 'Direito Penal',
    quote: 'Quer aprender a base do Direito Penal? Cola aí!',
    price: '25.90',
    grade: 2.5,
    userInfo: { name: 'Alex Donutbrisa', university: 'FFLCH', degree: 'Filosofia', avatar: avatar2 },
  },
];
