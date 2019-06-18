import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from 'reactstrap';

storiesOf('Elements', module)
.add('Button', () => (
	<div>
		<Button color="primary">primary</Button>{' '}
		<Button color="secondary">secondary</Button>{' '}
		<Button outline color="primary">outline</Button>{' '}
		<Button color="link">link</Button>

		<Button color="primary" size="sm">small button</Button>{' '}
        <Button color="secondary" size="sm">small button</Button>{' '}
        <Button outline color="secondary" size="sm">small outline button</Button>

        <Button color="secondary" block>Block level button</Button>
	</div>
));
