import spidermanImg from "../assets/images/spiderman.jpeg";
import batmanImg from "../assets/images/batman.jpeg";
import supermanImg from "../assets/images/superman.jpeg";
import obivanImg from "../assets/images/obivan.jpeg";
import capitanImg from "../assets/images/capitan.jpeg";
import dartImg from "../assets/images/dart.jpeg";
import jedaiImg from "../assets/images/jedai.jpeg";
import jokerImg from "../assets/images/joker.jpeg";


const costumes = [
  { id: 1, name: "Человек-паук", image: spidermanImg, description: "Красно-синий костюм с паутиной.", size: "48-52", price: 1000, stock: 2 },
  { id: 2, name: "Бэтмен", image: batmanImg, description: "Черный костюм супергероя.", size: "48-52", price: 1500, stock: 1 },
  { id: 3, name: "Супермен", image: supermanImg, description: "Красный костюм супергероя.", size: "48-52", price: 700, stock: 4 },
  { id: 4, name: "Оби Ван Кеноби", image: obivanImg, description: "Обиванский костюм супергероя.", size: "48-52", price: 1000, stock: 0 },
  { id: 5, name: "Капитан Америка", image: capitanImg, description: "Костюм капитана Америки.", size: "48-52", price: 1500, stock: 1 },
  { id: 6, name: "Дарт Вейдер", image: dartImg, description: "Костюм Дарт Вейдера.", size: "48-52", price: 1500, stock: 0 },
  { id: 7, name: "Джедай", image: jedaiImg, description: "Джедайский костюм супергероя.", size: "48-52", price: 1500, stock: 3 },
  { id: 8, name: "Джокер", image: jokerImg, description: "Костюм Джокера.", size: "48-52", price: 1500, stock: 0 }
];

export default costumes;
