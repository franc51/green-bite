import React from "react";
import "./RecipeCategory.css";

const RecipeCategory = () => {
  const categories = [
    {
      category: "Fel principal",
      link: "https://cdn.recipes.lidl/images/recipes/ro-RO/2f7913ca-ab22-4d02-b10c-cebaec586571/recipe_detail_1264x494_40._Varza_calita_cu_friptura_de_curcan.jpg",
    },
    {
      category: "Supă/Ciorbă",
      link: "https://cdn.recipes.lidl/images/recipes/ro-RO/2d3e33de-eabc-493a-9351-63e380a698db/detail_1264x494Supa-de-ciuperci-si-paine-prajita-crutoane.jpg",
    },
    {
      category: "Antreu",
      link: "https://cdn.recipes.lidl/images/recipes/ro-RO/b3697f74-2426-4899-b4ae-d7ab3936d5da/recipe_detail_1264x494_Shakshuka.jpg",
    },
    {
      category: "Paste",
      link: "https://cdn.recipes.lidl/images/recipes/ro-RO/ecfe3057-7e9c-4976-8110-87113495fc59/detail_1264x494Paste-cu-fasole.jpg",
    },
    {
      category: "Pește",
      link: "https://cdn.recipes.lidl/images/recipes/ro-RO/f595931c-8f23-4097-a7b3-5101ed8c598a/recipe_detail_1264x494_file_de_peste_la_cuptor_in_stil_mediteranean.JPG",
    },
    {
      category: "Desert",
      link: "https://cdn.recipes.lidl/images/recipes/ro-RO/11ac30c2-c3d4-4435-932f-e4d372d18863/recipe_detail_1264x494_KW16_Pasca_cu_branza_si_glazura_de_ciocolata_4.JPG",
    },
  ];

  return (
    <div className="category_container">
      <h1>Ce gătim azi?</h1>

      <div className="categories_grid">
        {categories.map((item, index) => (
          <div className="category_item" key={index}>
            <img src={item.link} alt={item.category} />
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeCategory;
