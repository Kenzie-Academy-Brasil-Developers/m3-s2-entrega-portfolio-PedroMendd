import styles from "./style.module.css"

export const AboutSection = () => {
  return (
    <section id="About-Section">
      <div className={`${styles.AboutBox} container`}>
        <h1 className="title md">Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas,
          voluptate blanditiis sapiente neque doloremque dolore error natus
          deserunt quis, in, voluptatibus ut sint? Dignissimos dolor qui numquam
          quidem ullam.
        </p>
      </div>
    </section>
  );
};
