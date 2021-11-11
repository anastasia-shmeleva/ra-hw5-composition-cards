import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';
import CardTitle from './components/Card/CardTitle';
import CardText from './components/Card/CardText';
import CardBtn from './components/Card/CardBtn';

const title = "Card title";
const text = "Some quick example text to build on the card title and make up the bulk of the card's content.";
const btnTxt = "Go somewhere";

function App() {
  return (
    <div className="App">
      <Card img={logo}>
        <CardTitle title={title}></CardTitle>
        <CardText text={text}></CardText>
        <CardBtn btnTxt={btnTxt}></CardBtn>
      </Card>
    </div>
  );
}

export default App;
