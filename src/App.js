import React, { useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  const [dataFormulario, setDataFormulario] = useState({
    titulo:'',
    descripcion:'',
    fechalanzamiento:'',
    autor:'',
    
  })

  const handleInputChange = (event) =>{
    //console.log(event.target.value)
    setDataFormulario({
        ...dataFormulario,
        [event.target.name] : event.target.value
    })
}

  const enviarData = async event =>{
    event.preventDefault();
    try {
      let config = {
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify(dataFormulario)
      } 
     
      let res = await fetch('https://localhost:44377/WeatherForecast/add',config)
      let json = await res.json()

      console.log(json)
    }catch (error) {
      
    }
  }



  return (
    <Form className="container mt-5" onSubmit={enviarData}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label className="mt-2">Titulo</Label>
            <Input className="mt-2" type="text"  name="titulo" placeholder="Titulo Libro" onChange={handleInputChange} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="mt-2">Descripcion</Label>
            <Input className="mt-2" type="text" name="descripcion"  placeholder="Descripcion Libro" onChange={handleInputChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form >
        <Col md={6}>
        <FormGroup>
          <Label className="mt-2">Fecha Lanzamiento</Label>
          <Input className="mt-2"  type="datetime-local" name="fechalanzamiento"  placeholder="Fecha Lanzamiento Libro" onChange={handleInputChange} />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
          <Label className="mt-2">Autor</Label>
          <Input className="mt-2" type="text" name="autor" placeholder="Autor Libro" onChange={handleInputChange} />
        </FormGroup>
        </Col>
        <FormGroup>
          <Col md={6}>
          <Label className="mt-2">Precio</Label>
          <Input className="mt-2" type="text" name="precio" placeholder="precio Libro" onChange={handleInputChange} />
          </Col>
        </FormGroup>
      </Row>
      <Button className="mt-4 btn btn-success" type="submit">Agregar Libro</Button>
    </Form>
  );
}

export default App;