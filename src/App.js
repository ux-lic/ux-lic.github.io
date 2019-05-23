import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import './mytheme.css';
import { Button } from 'trunx'



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="container app-box">

          <div className="app-grid">

            <div className="app-heading">
              <div className="app-heading-title">
                <h1 className="is-size-1">Typography</h1>
              </div>
            </div>
            <div>
              <h1 className="is-size-1">Heading 1</h1>
              <h2 className="is-size-2">Heading 2</h2>
              <h3 className="is-size-3">Heading 3</h3>
              <h4 className="is-size-4">Heading 4</h4>
              <p>Paragraph with some small text inside</p>
              <label>label</label>

              <p className="lead">The system font for LIC public facing sites is Booster Next FY. Booster Next FY is a friendly, round, sans-serif typeface that requires a license to install. </p>
              <p className="lead">To ensure we have consistent and predictable sizing in all browsers we use a root (base) font size of 16px. We use an rem unit is relative to the root element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that. </p>
            </div>

            <div className="app-heading">
              <div className="app-heading-title">
                <h1 className="is-size-1">Icons</h1>
              </div>
            </div>

            <div className="app-heading">
              <div className="app-heading-title">
                <h1 className="is-size-1">Buttons</h1>
              </div>
            </div>

            <div className="app-subheading">
                <h4 className="is-size-4">Simple buttons</h4>
            </div>



            <div className="app-grid app-grid-tight">
                
                  <Button isPrimary>Primary</Button>
                  <Button isInfo>Seconary</Button>
                  <Button isOutlined isPrimary>Outlined</Button>
                  <Button isText>Link</Button>
            </div>

            <div className="app-grid app-grid-tight">
                
                  <Button isSmall isPrimary>Primary</Button>
                  <Button isSmall isInfo>Seconary</Button>
                  <Button isSmall isOutlined isPrimary>Outlined</Button>
            </div>


            <div className="app-subheading">
                <h4 className="is-size-4">Complex buttons</h4>
            </div>


          </div>

        </div>

      </div>
    );
  }
}

export default App;
