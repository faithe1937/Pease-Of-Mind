import React from "react";
import Chart from "../favorite/Chart";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='mac-card'>
        <img
          src='https://images.unsplash.com/photo-1554998171-89445e31c52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2610&q=80'
          alt='Girl in a jacket'
          width='30%'
        />
        <img
          src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80'
          alt='Girl in a jacket'
          width='30%'
        />
        <img
          src='https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'
          alt='Girl in a jacket'
          width='30%'
        />
      </div>
      <div className='macro-container'>
        <h1>What are Macronutrients?</h1>
        <br />
        <h4>
          If you’re interested in fitness and nutrition, you’ve likely heard the
          term macronutrients, aka macros. It seems everyone is concerned about
          counting macros and calculating their daily intake. So what are
          macronutrients? Macros are the fundamental nutritional compounds your
          body needs to function: protein, carbohydrates, and fats.
        </h4>
        <div className='mac'>
          <h3>Carbohydrates</h3>

          <p>
            Carbohydrates are the primary source of energy in the human body.
            They provide at least 50% of total calories per day. The two main
            types of carbohydrates are simple and complex.
          </p>
          <h3>Protein</h3>

          <p>
            Protein is created by amino acids, which help build muscle,
            transport nutrients, and prevent illness, among many other
            functions. The body requires 20 different amino acids for optimal
            functioning, 11 of which are created by the body. The other 9 must
            be obtained through protein sources in food, including meat, dairy,
            soy, and grains.
          </p>
          <h3>Fat</h3>

          <p>
            Fats are considered macronutrients because they’re vital for
            maintaining cell function, boosting brain development, protecting
            the organs, and boosting nutritional intake from other foods. Fats
            are composed of fatty acids and glycerol. Essential fatty acids
            include linoleic acid, an omega-6 fatty acid, and a-Linoleic acid,
            an omega-3 fatty acid.
          </p>
        </div>
        <h1 style={{ textAlign: "center" }}>
          Compare Recipes To Your Macronutrient Goals
        </h1>
        <br></br>
        <div className='chart-border'>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
