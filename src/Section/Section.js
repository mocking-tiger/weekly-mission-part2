import "./Section.css";
import Search from "./Search/Search";
import Card from "./Card/Card";

function Section() {
  return (
    <section>
      <div>
        <Search />
      </div>
      <div className="card-box">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Section;
