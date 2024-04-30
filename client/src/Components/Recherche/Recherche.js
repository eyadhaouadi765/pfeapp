import React from 'react'

const Recherche = () => {
  return (
    <div>
         <h1>Formations</h1>
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Rechercher..."/>
            <button type="button" id="searchBtn">Rechercher</button>
        </div>
   

    <div>
  
        <ul className="courses-list">
       
            <li class="course-item devops">
                <h2>Formation DevOps</h2>
                <p>Apprenez les principes de DevOps...</p>
            </li>
          
            <li class="course-item ml">
                <h2>Formation Machine Learning</h2>
                <p>Découvrez les bases du Machine Learning...</p>
            </li>
         
            <li class="course-item marketing">
                <h2>Formation Marketing</h2>
                <p>Maîtrisez les techniques de marketing digital...</p>
            </li>
        
            <li class="course-item management">
                <h2>Formation Management</h2>
                <p>Améliorez vos compétences en management...</p>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Recherche