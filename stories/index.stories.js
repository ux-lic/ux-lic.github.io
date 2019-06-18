import React from 'react';

import { Button } from 'reactstrap';

import '../src/App.css';

import { storiesOf } from '@storybook/react';


import { Elements,  Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Grid', module).add('General', () => (
	<div>
		<div className="app-heading">
          <div className="app-heading-title">
            <h1 className="is-size-1">8pt Grid</h1>
          </div>
        </div>
	</div>
));

storiesOf('Layout', module).add('General', () => (
	<div>
		<div className="app-heading">
          <div className="app-heading-title">
            <h1 className="is-size-1">Container etc</h1>
          </div>
        </div>
	</div>
));

storiesOf('Elements', module)
	.add('Button', () => (
		<div>

			<div className="app-heading">
              <div className="app-heading-title">
                <h1 className="is-size-1">Button</h1>
              </div>
            </div>
            <div className="app-subheading">
                <h4 className="is-size-4">Simple buttons</h4>
            </div>

			<Button color="danger">Danger!</Button>

		</div>
	));
	
  

);


