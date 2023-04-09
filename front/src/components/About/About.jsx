import React from 'react';
import styles from './About.module.css';
import aboutImage from './about.jpg';


const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam delectus molestiae esse est deleniti recusandae maiores. Mollitia fugit quis alias rerum laborum vitae ipsum iusto nam enim eveniet nobis modi minus, possimus blanditiis rem commodi sed impedit necessitatibus facere sint ut eos assumenda animi. Unde consectetur consequatur rerum provident laboriosam.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam delectus molestiae esse est deleniti recusandae maiores. Mollitia fugit quis alias rerum laborum vitae ipsum iusto nam enim eveniet nobis modi minus, possimus blanditiis rem commodi sed impedit necessitatibus facere sint ut eos assumenda animi. Unde consectetur consequatur rerum provident laboriosam.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam delectus molestiae esse est deleniti recusandae maiores. Mollitia fugit quis alias rerum laborum vitae ipsum iusto nam enim eveniet nobis modi minus, possimus blanditiis rem commodi sed impedit necessitatibus facere sint ut eos assumenda animi. Unde consectetur consequatur rerum provident laboriosam.
          </p>
        </div>
        <div className={styles.divImage}>
            <img 
              className={styles.image}
              alt="Cargando foto" 
              src={aboutImage}
            />
        </div>
      </div>
    </>
  )
}

export default About
