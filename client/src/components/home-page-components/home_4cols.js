import React from "react"
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import './styles/home_page_style.css'
const Home4Cols = () =>{
    return(
        <Container fluid>
            <Row>
                <Col xs id="home_4cols_col">
                    <h3 className="text-center mt-md-4" id = "home_4cols_h3">Management digital</h3>
                    <p>Managementul digital și la distanță a informațiilor administrative. Acces oricând la informațiile despre medici, săli, departamente, servicii oferite și prețuri. Opțiuni pentru crearea, modificarea și eliminarea rapidă a serviciilor medicale oferite precum și multe alte opțiuni.</p>
                </Col>

                <Col xs id="home_4cols_col">
                    <h3 className="text-center mt-md-4" id = "home_4cols_h3">Soluții pentru medici</h3>
                    <p>Crearea și gestiunea programărilor pentru operații, consultații și alte servicii medicale. Scrierea și expedierea digitală a documentelor medicale pentru pacienți. Aplicația include și alte servicii auxiliare pentru a facilita activitatea cadrelor medicale.</p>
                </Col>

                <Col xs id="home_4cols_col">
                    <h3 className="text-center mt-md-4" id = "home_4cols_h3">Transparență</h3>
                    <p>Acces transparent la datele tale din aplicație. Aplicația include opțiuni pentru exportul datelor referitoare la programările tale și multe altele în fișiere de diferite formate.</p>
                </Col>

                <Col xs id="home_4cols_col">
                    <h3 className="text-center mt-md-4" id = "home_4cols_h3">Acces 24/7 la date</h3>
                    <p>Verificare situației medicale poate fi realizată în orice moment. Ai acces la informații despre viitoarele consultații, precum și despre consultațiile efectuate în trecut. Acces la vizualizarea și descărcarea documentelor medicale în format PDF.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home4Cols;