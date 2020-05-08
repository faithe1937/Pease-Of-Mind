import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className='master-detail-element detail'>
        <h2>What are Macronutrients?</h2>
        <hr></hr>
        <h3>Fat</h3>
        <p>
          Fat is a nutrient. It is crucial for normal body function, and without
          it, we could not live. Not only does fat supply us with energy, it
          also makes it possible for other nutrients to do their jobs. There are
          three types of fats: 1. Saturated Fats, 2. Unsaturated Fats, which
          include: polyunsaturated fats and monounsaturated fats, and 3. Trans
          Fats. Some of the best sources of these fatty acids include: avocados,
          olive oil, nuts, seeds, and fatty fish.
        </p>
        <h3>Protein</h3>
        <p>
          Protein are one of the building blocks of body tissue and can also
          serve as a fuel source. It is a nutrient needed by the human body for
          growth and maintenance. Aside from water, proteins are the most
          abundant kind of molecules in the body. Some sources of dietary
          protein include: lean meat, poultry, fish, eggs, seeds, nuts, milk,
          cheese, etc.
        </p>
        <h3>Carbohydrates</h3>
        <p>
          Carbohydrates provide fuel for the central nervous system and energy
          for working muscles. They also prevent protein from being used as an
          energy source, enable fat metabolism, and are important for brain
          function. Carbs influence mood, memory and act as a quick source of
          energy. Carbohydrates can be found in: bread, beans, potatoes,
          spaghetti, soft drinks. The most common and abundant forms are sugars,
          fibers, and starches.
        </p>
      </div>
    );
  }
}

export default Content;
