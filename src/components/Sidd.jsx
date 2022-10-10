import siddpic from "../sidd.jpeg";
const siddjpeg = siddpic;

const Sidd = () => {
  return (
    <div className="parent">
      <div className="sidd">
        <img src={siddjpeg} alt="" />
        <div className="info">
          <h1>Hello there. My name is Sidd.</h1>
          <p className="p1">
            I go by the stage name of Feidhe (faith) I am an Artist / Music
            Producer / Sound Engineer by profession
          </p>
        </div>
      </div>
      <p className="p2">
        My vision is to become a successful musical artist and to help people,
        word and express their emotions better through my music, because I
        believe one of the biggest favors you could do for someone is to ignite
        the spark of inspiration in them. All the work provided by me is self
        made, I have learnt music production and engineering over the years by
        myself. Other than music, I do write my own songs and everything
        regarding it. I take interest in scriptures, mostly mythological, and I
        have a huge interest in spirituality and philosophy especially in the
        field of Advaita / Non-duality.
      </p>
    </div>
  );
};

export default Sidd;
