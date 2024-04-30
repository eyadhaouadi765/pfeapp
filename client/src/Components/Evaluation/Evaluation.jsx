import React, { Component } from 'react'
import './script_evaluation'
import './Evaluation.css'
const Evaluation = () => {
  return (
    <div className="wrapper">
      <div>
    <h2>Évaluation de la Formation</h2>
    </div>
    
    <form id="evaluationForm">
      
       
    <div className="rating">
        <span className="star" data-rating="1">&#9733;</span>
        <span className="star" data-rating="2">&#9733;</span>
        <span className="star" data-rating="3">&#9733;</span>
        <span className="star" data-rating="4">&#9733;</span>
        <span className="star" data-rating="5">&#9733;</span>
    </div>


        <div className="form-group">
            <label for="commentaire">Commentaire :</label>
            <textarea class="form-control" id="commentaire" name="commentaire" rows="4"></textarea>
        </div>
        
       
        <button type="submit" class="btn btn-primary">Soumettre</button>
    </form>
</div>



  )
}

<script src="script_evaluation.js"></script>
export default Evaluation