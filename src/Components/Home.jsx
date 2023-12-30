import React from "react";
import vg from '../assets/2.webp'
import "../Styles/home.scss";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1 className="Techy">TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
       <img src={vg} alt="Graphics" />

       <div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos enim, eveniet numquam ducimus odit ipsa nemo nisi, unde minus consequuntur sequi nihil praesentium voluptates sit vitae ipsam magnam dolore necessitatibus, aperiam error. Odit illum aliquam minima tempora nobis earum recusandae, tempore minus? Dolorem, debitis.
        </p>
       </div>

      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vitae reprehenderit eos ea repudiandae dolorem sequi ipsam! Blanditiis, quas? Animi libero inventore dolorem possimus alias, tempora omnis earum totam blanditiis veritatis unde nobis voluptatibus nulla modi illum tenetur sint harum vitae? Qui rem voluptatibus veritatis. Quae, qui cumque numquam alias rerum consequuntur ea hic, voluptates dicta molestias aperiam debitis maiores consequatur nisi. Id, minima earum quos magnam veniam modi iusto.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s",
            }}>
           <AiFillGoogleCircle />
           <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s",
            }}>
           <AiFillAmazonCircle />
           <p>Amazon</p>
            </div>

            <div style={{
              animationDelay:"0.7s",
            }}>
           <AiFillYoutube />
           <p>Youtube</p>
            </div> 
            <div style={{
              animationDelay:"0.3s",
            }}>
           <AiFillInstagram />
           <p>Instagram</p>
            </div>



          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
