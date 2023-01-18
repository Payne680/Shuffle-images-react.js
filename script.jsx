import data from './data.js';

function Cards() {

const Card = ({ handleClick, title, id, src, description }) => {
  const tiltRef = React.useRef(null);
  React.useEffect(() => {
    const tiltNode = tiltRef.current;
    console.log(tiltNode);
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => {
      tiltNode.vanillaTilt.destroy();
    };
  }, []);
  return (
    <div ref={tiltRef} onClick={handleClick} className="card" key={id}>
      <img src={src} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

  const {useState, useEffect} = React;

  const [state, setState] = useState(data);

    const shuffleCards = (arr) => {
     return arr.sort((a,b) => 0.5 - Math.random());
    }
    
    useEffect(()=>{
     const shuffledCardArr = shuffleCards(data);
     setState(shuffledCardArr);
    },[state]);

    function handleClick () {
      const newArr = shuffleCards([...state]);
      setState(newArr);
    }

  return (
    <div className="generalWrapper">
        <nav>
        <a id="logo"href="">React.js</a>
        <a href="">Home</a>
        <a href=" ">About</a>
        <a href=" ">Tour Package</a>
        <a href=" ">Galllery</a>
        <a href=" ">Blog</a>
        <a href="">Contact us</a>
     </nav>
     <div class="hero">
        <b class="tour-package1">Animal Card</b>
      </div>
      <details open>
        <summary>Shuffle and Tilt images</summary>
        <p class="text"> .Shuffle Images by clicking on the card</p>
        <p class="text">.To tilt an image hoover your mouse cursor over the Card</p>
      </details>
      
    <div className="card-container">
      {data.map((item) => {
        return  <Card {...item} handleClick={handleClick} />
      })}
    </div>
    </div>
  );
}

function App() {
  return (
    <div className="overal-container">
      <Cards />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
