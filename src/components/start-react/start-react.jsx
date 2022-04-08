import react from "../../images/react.png";
import svgImg from "../../images/9foG-.svg";

const StartReact = () => {
  return (
    <div className="start-react">
      <section className="hero">
        <main>
          <section>
            <h1>Start React</h1>
            <h1>Hello, React</h1>
          </section>
        </main>
        <div className="images">
          <img src={react} alt="panel" width="250" />
          <img src={svgImg} alt="svgImg" />
        </div>
      </section>
    </div>
  );
};

export default StartReact;
