import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
const Stats = () => {
  return (
    <Card className="text-center" style={{ marginTop: "20px" }}>
      <Card.Body>
        <Card.Title>
          <h2>A PROPOS DE NOUS</h2>
        </Card.Title>
        <Card.Text>
          Institué le 30 Décembre 1975, le Centre National de l’Informatique est
          un établissement public à caractère non administratif doté de la
          personnalité civile et de l’autonomie financière. <br /> Le CNI est un
          organisme placé sous la tutelle du Ministre des Technologies de la
          Communication, et opérant dans les domaines du secteur de
          l’informatique et des technologies de la communication et certifié ISO
          9001version 2015.
        </Card.Text>
        <Card.Text>
          <h5>Missions :</h5>Principal appui aux structures publiques de
          l’administration dans la réalisation, le déploiement et l’exploitation
          des systèmes d’information, le CNI assure les activités suivantes :
        </Card.Text>
        <CardGroup>
          <Card border="primary" style={{ margin: "5px" }}>
            <Card.Body>
              <Card.Title>Maîtrise d’ouvrage déléguée </Card.Title>
              <Card.Text>
                Maîtrise d’ouvrage déléguée et Pilotage de projet.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{ margin: "5px" }}>
            <Card.Body>
              <Card.Title>Etudes & Conseil</Card.Title>
              <Card.Text>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Système d’information</div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Réseaux et Sécurité</div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{ margin: "5px" }}>
            <Card.Body>
              <Card.Title>Développement</Card.Title>
              <Card.Text>
                Développement et Maintenance des systèmes d’Information <br />
                Formation sur les SI développés par le CNI.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card border="primary" style={{ margin: "5px" }}>
            <Card.Body>
              <Card.Title>Hébergement du Système</Card.Title>
              <Card.Text>
                Hébergement des serveurs. <br />
                Hébergement des applications et des données avec ou sans
                exploitation.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{ margin: "5px" }}>
            <Card.Body>
              <Card.Title>Backup et continuité d’activité</Card.Title>
            </Card.Body>
          </Card>
          <Card border="primary" style={{ margin: "10px" }}>
            <Card.Body>
              <Card.Title>Formation & certification</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
};

export default Stats;
