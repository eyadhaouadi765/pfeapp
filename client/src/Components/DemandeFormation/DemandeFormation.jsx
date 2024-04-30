import React from 'react'
import './DemandeFormation.css'

const DemandeFormation = () => {
  return (
    <div class="container">
  <div className='titre'>
        <h1>Demande de Formation</h1>
        </div>
      

        <form id="formationForm">
            <div className="form1">
                
                <input type="text" id="nom" name="nom" placeholder='nom complet' required></input>
            </div>
<br></br>
            <div class="form1">
              
                <input type="email" id="email" name="email"  placeholder='email'required></input>
            </div>
<br></br>
            <div className="form2">
               
                <select id="formation" name="formation"  placeholder='formation'required>
                    <option value="" disabled selected>Choisir une formation</option>
                    <option value="formation1">Formation 1</option>
                    <option value="formation2">Formation 2</option>
                    <option value="formation3">Formation 3</option>
                </select>
                <br></br>
            </div>

            <div class="form-group">
              <br></br>
                <textarea id="message" name="message" rows="4"placeholder=' message' required></textarea>
            </div>

            <button type="submit">Envoyer</button>
        </form>
    </div>
  )
}

export default DemandeFormation