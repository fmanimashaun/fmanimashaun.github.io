import AuthorImg from "@/assets/img/author.png"

const AboutContent = () => {
  return (
    <div className="about__wrapper">
      <div className="about__wrapper-left">
			<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        perferendis non temporibus beatae officiis fugit totam ipsum deserunt
        numquam pariatur, commodi facere rerum cum adipisci quod inventore rem
        eos libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        perferendis non temporibus beatae officiis fugit totam ipsum deserunt
        numquam pariatur, commodi facere rerum cum adipisci quod inventore rem
        eos libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        perferendis non temporibus beatae officiis fugit totam ipsum deserunt
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        perferendis
      </p>
			</div>
			<div className="about__wrapper-right">
				<div className="about__img-wrapper">
					<img src={AuthorImg} alt="Animashaun Fisayo portrait" />
				</div>
			</div>
    </div>
  );
};

export default AboutContent;
