import React from 'react'; 

const Recipe = ({title, calories, image, totalNutrients}) => {
    console.log(totalNutrients.FAT.label)
    return(
        <div>
            <h1>{title}</h1>
            <p>Calories:{calories}</p>
    <span>Fat:{totalNutrients.FAT.quantity}grams</span>
    <span>Carbs:{totalNutrients.CHOCDF.quantity}grams</span>
    <span>Protein{totalNutrients.PROCNT.quantity}grams</span><br></br>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe; 