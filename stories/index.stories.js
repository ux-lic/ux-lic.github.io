import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'bulma/css/bulma.css';
import '../css/mystyles.css';


storiesOf('Helpers', module)
  .add('General', () => (
    <div></div>
  ))
  .add('Luiza', () => (
    <div className="box">
      <p>Hello Luiza</p>
    </div>
  ))
  .add('Color', () => (
    <div className="columns">
      <div className="column is-one-quarter">
       <div className="box">
        <article className="media">
          <div className="media-left">
            <div className="box has-background-primary"></div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Dark blue</strong> <small>-primary</small>
                <br/>
                <code>has-background-primary</code>
                <br/>
                <code>has-text-primary</code>
              </p>
            </div>
          </div>
        </article>

        <article className="media">
          <div className="media-left">
            <div className="box has-background-info"></div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Sky blue</strong> <small>-info</small>
                <br/>
                <code>has-background-info</code>
                <br/>
                <code>has-text-info</code>
              </p>
            </div>
          </div>
        </article>

        <article className="media">
          <div className="media-left">
            <div className="box has-background-link"></div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Dark sky blue</strong> <small>-link</small>
                <br/>
                <code>has-background-link</code>
                <br/>
                <code>has-text-link</code>
              </p>
            </div>
          </div>
        </article>

        <article className="media">
          <div className="media-left">
            <div className="box has-background-grey-lighter"></div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Light blue</strong> <small>-grey-lighter</small>
                <br/>
                <code>has-background-grey-lighter</code>
                <br/>
                <code>has-text-grey-lighter</code>
              </p>
            </div>
          </div>
        </article>

        <article className="media">
          <div className="media-left">
            <div className="box has-background-white-ter"></div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Blue white</strong> <small>-white-ter</small>
                <br/>
                <code>has-background-white-ter</code>
                <br/>
                <code>has-text-white-ter</code> 
              </p>
            </div>
          </div>
        </article>
      </div>




     </div>
    </div>
))
  .add('Typography', () => (
    <div></div>
  ))


  
storiesOf('Elements', module)
  .add('Box', () => (
    <div className="columns is-vcentered">
      <div className="column is-one-quarter">
        <box>Hello World!</box>
      </div>
    </div>
  ))
  .add('Button', () => (
    <div className="columns">
      <div className="column">
        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-info">Info</button>
          <button className="button is-outlined is-primary">Outlined</button>
          <button className="button is-primary is-small">Small</button>
          <button className="button is-primary is-large">Large</button>
        </div>
        
      </div>
    </div>
    
  ))
  .add('Form', () => (
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox"/>
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question"/>
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question"/>
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>

      </div>
    </div>
  ))
  .add('Table', () => (
    <div className="columns">
      <div className="column">
    	<table className="table is-striped is-hoverable">
		    <thead>
		        <tr>
		            <th>Name</th>
		            <th>Score</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		            <td>Ryu</td>
		            <td>10000</td>
		        </tr>
		        <tr className='is-selected'>
		            <td>Ken</td>
		            <td>5000</td>
		        </tr>
		        <tr>
		            <td>Akuma</td>
		            <td>1200</td>
		        </tr>
		    </tbody>
		</table>
    </div>
    </div>
  ))
  .add('Tag', () => (
    <div className="columns">
      <div className="column">
      	<tag isColor='primary'>Primary</tag>{' '}
    		<tag isColor='info'>Information</tag>{' '}
    		<tag isColor='light'>Muted</tag>{' '}
    		<tag isColor='success'>Success</tag>{' '}
    		<tag isColor='danger'>Danger</tag>{' '}
      </div>
    </div>
  ))
  .add('Progress', () => (
    <div className="columns">
      <div className="column is-one-quarter">
        <p>Progress bar</p>
    	 <progress className="is-info is-small" value={30} max={100}/>
       <progress className="is-info is-medium" value={30} max={100}/>
       <progress className="is-info is-large" value={30} max={100}/>
      </div>
    </div>
  ))
  .add('Notification', () => (
    <div className="columns">
      <div className="column is-one-quarter">
        <div className="notification is-link">
          <button className="delete"></button>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </div>
        <div className="notification is-info">
          <button className="delete"></button>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </div>
        <div className="notification is-primary">
          <button className="delete"></button>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </div>
      </div>
    </div>
  ))
  .add('Typography', () => (
    <div className="columns">
      <div className="column is-one-quarter">
        <h1 className="title is-1">Title 1</h1>
        <h2 className="title is-2">Title 2</h2>
        <h3 className="title is-3">Title 3</h3>
        <h4 className="title is-4">Title 4</h4>
        <h5 className="title is-5">Title 5</h5>
        <h6 className="title is-6">Title 6</h6>
        
        <div className="box has-background-primary">
          <p className="title is-5 is-uppercase has-text-white">Label heading</p>
          <p className="subtitle is-3 has-text-white">100%</p>
        </div>
        <div className="box content">
      		<p>The system font for LIC public facing sites is Booster Next FY. Booster Next FY is a friendly, round, sans-serif typeface that requires a license to install. </p>
          <p>To ensure we have consistent and predictable sizing in all browsers we use a root (base) font size of 16px. We use an rem unit is relative to the root element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that. </p>
          <p>You can wrap semantic html with the <code className="code">content</code> class. This applies automatic formatting such as spacing between paragraphs defering the need for <code className="code">&lt;br/&gt;</code> tags.</p>
    		</div>
      </div>
    </div>
  ))
storiesOf('Components', module)
  .add('Breadcrumb', () => (
  	<div className="columns">
      <div className="column">
  	    <nav className="breadcrumb is-uppercase" aria-label="breadcrumbs">
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </nav>
  	</div>
    </div>
  ))
  .add('Card', () => (
    <div className="columns">
      <div className="column is-one-quarter">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Card or tile
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br/>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </div>
  ))
  .add('Pagination', () => (
    <div className="columns">
      <div className="column">
    	<nav className="pagination is-rounded" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
          <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
          <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
        </ul>
      </nav>
    </div>
    </div>
  ))
  .add('Tabs', () => (
    <div className="columns">
      <div className="column">
      	<div className="tabs">
          <ul>
            <li className="is-active"><a>Profile</a></li>
            <li><a>Health</a></li>
            <li><a>Liveweight</a></li>
            <li><a>Reproduction</a></li>
          </ul>
        </div>
      </div>
    </div>
  ))

