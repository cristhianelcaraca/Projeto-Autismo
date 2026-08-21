function AboutUs() {
  return (
    <>
      <section className="about-us">
        <div className="container about-us-inner">
          <div className="plant">
            <img
              src="/images/plant.png"
              alt="Small green plant with a few leaves growing in a simple, clean scene, set against a light background. The image is calm and welcoming, suggesting growth, care, and a hopeful atmosphere."
            />
          </div>

          <div className="about-text">
            <h3>Informação é o primeiro passo para a inclusão</h3>
            <p>
              Esse portal reúne informação confiável de fontes oficiais e
              instituições especializadas para apoiar você e sua família
            </p>
          </div>

          <a
            href="/"
            className="btn-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sobre Nós
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
