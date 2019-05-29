import React from 'react';

import '../src/App.css';
import 'bulma/css/bulma.css';
import '../src/mytheme.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Content, Buttons, Button, Container } from 'trunx'

import { Elements,  Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Grid', module).add('General', () => (
	<Container>
		<div className="app-heading">
          <div className="app-heading-title">
            <h1 className="is-size-1">8pt Grid</h1>
          </div>
        </div>
	</Container>
));

storiesOf('Layout', module).add('General', () => (
	<Container>
		<div className="app-heading">
          <div className="app-heading-title">
            <h1 className="is-size-1">Container etc</h1>
          </div>
        </div>
	</Container>
));

storiesOf('Elements', module)
	.add('Button', () => (
		<Container>
			<div className="app-heading">
              <div className="app-heading-title">
                <h1 className="is-size-1">Button</h1>
              </div>
            </div>
            <div className="app-subheading">
                <h4 className="is-size-4">Simple buttons</h4>
            </div>
			<Buttons>
				<Button isPrimary onClick={action('clicked')}>Primary</Button>
				<Button isInfo onClick={action('clicked')}>Secondary</Button>
				<Button isPrimary isOutlined onClick={action('clicked')}>Outlined</Button>
				<a onClick={action('clicked')}>Link</a>
			</Buttons>
			<Buttons>
				<Button isSmall isPrimary onClick={action('clicked')}>Primary</Button>
				<Button isSmall isInfo onClick={action('clicked')}>Secondary</Button>
				<Button isSmall isPrimary isOutlined onClick={action('clicked')}>Outlined</Button>
			</Buttons>
			<div className="app-subheading">
                <h4 className="is-size-4">Complex buttons</h4>
            </div>
            <Buttons>
            	<Button type='submit' disabled value='Disabled' />
            	<a>Download report</a>
            </Buttons>
		</Container>
	))
	.add('Content', () => (
		<div Content>
			<section>
				<p>When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use <code>Content</code> as container. It can handle almost any HTML tag:</p>
				<p><code>&lt;h1&gt;</code>to<code>&lt;h6&gt;</code> headings</p>
			</section>
			<h1>Booster Next FY</h1>
	  	<h1 className="is-size-1">Size 1</h1>
	  	<h2 className="is-size-2">Size 2</h2>
	  	<h3 className="is-size-3">Size 3</h3>
	  	<h4 className="is-size-4">Size 4</h4>
	  	<h4 className="is-size-5">Size 4</h4>
	  	<h4 className="is-size-6">Size 4</h4>
	  	<label className="is-uppercase is-size-7 has-text-weight-medium">Identification label</label>
	  	<p>The system font for LIC public facing sites is Booster Next FY. Booster Next FY is a friendly, round, sans-serif typeface that requires a license to install.
	To ensure we have consistent and predictable sizing in all browsers we use a root (base) font size of 16px. We use an rem unit is relative to the root element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.</p>
		</div>
	)
  

);

storiesOf('Form', module).add('General', () => (
	<Container>
		<div className="app-heading">
          <div className="app-heading-title">
            <h1 className="is-size-1">Grid</h1>
          </div>
        </div>
	</Container>
));

storiesOf('Component', module).add('General', () => (
	<Container>
		<div className="app-heading">
          <div className="app-heading-title">
            <h1 className="is-size-1">Component</h1>
          </div>
        </div>
	</Container>
));


