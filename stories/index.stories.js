import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'bulma/css/bulma.css'
import '../css/mystyles.css';

import { Breadcrumb, BreadcrumbItem, Button, Card, CardContent, CardHeader, CardHeaderIcon, CardHeaderTitle, CardFooter, CardFooterIcon, CardFooterTitle, Columns, Column, Container, Content, Table, Progress, Notification, Delete, Field, Control, Input, Icon, Select, Help, Tag, TextArea, Checkbox, Radio, Label, Pagination, Page, PageLink, PageEllipsis, PageControl, PageList, Tabs, Tab, TabList, TabLink, Box, Title, Heading } from 'bloomer';

// storiesOf('Overview', module)
//   .add('Welcome', () => (
//     <Container></Container>
//   ))
// storiesOf('Foundations', module)
//   .add('Color', () => (
//     <Container>
//       <Columns isCentered>
//         <Column><Box column className="has-background-primary" hasTextColor="white">Dark blue</Box></Column>
//         <Column><Box column className="has-background-info" hasTextColor="white">Sky blue</Box></Column>
//         <Column><Box column className="has-background-link" hasTextColor="white">Dark sky blue</Box></Column>
//         <Column><Box column className="has-background-light">Light blue</Box></Column>
//         <Column><Box column className="has-background-grey-light" >Blue white</Box></Column>
//       </Columns>
//     </Container>
//   ))
//   .add('8pt', () => (
//     <Container></Container>
//   ))
//   .add('Columns', () => (
//     // notes:'The power of Flexbox in a simple interface',
//     <Container>
      
//     </Container>
//   ))
//   .add('CSS Grid', () => (
//     <Container></Container>
//   ));
  
storiesOf('Elements', module)
  .add('Box', () => (
    <Container>
        <Box>Hello World!</Box>
    </Container>
  ))
  .add('Button', () => (
    <Container>
    	<Button isColor='primary'>Primary</Button>{' '}
    	<Button isColor='info'>Info</Button>{' '}
    	<Button isOutlined isColor='primary'>Outlined</Button>{' '}
    	<a>Text link</a>{' '}

    	<Button isOutlined isSize='small' isColor='primary'>Small outlined</Button>{' '}
    	<Button isColor='primary' isLoading>Loading</Button>{' '}

    </Container>
  ))
  .add('Form', () => (
    <Container>
        <Field>
		    <Label>Name</Label>
		    <Control>
		        <Input type="text" placeholder='Text Input' />
		    </Control>
		</Field>

		<Field>
		    <Label>Username</Label>
		    <Control hasIcons>
		        <Input isColor='success' placeholder='Text Input' value='JJFarms' />
		        <Icon isSize='small' isAlign='left'>
		            <span className="fa fa-user" aria-hidden="true" />
		        </Icon>
		        <Icon isSize='small' isAlign='right'>
		            <span className="fa fa-check" aria-hidden="true" />
		        </Icon>
		    </Control>
		    <Help isColor='success'>This username is available</Help>
		</Field>

    <Field>
        <Label>Password</Label>
        <Control hasIcons>
            <Input isColor='danger' placeholder='Text input' value='*******' />
            <Icon isSize='small' isAlign='left'>
                <span className="fa fa-user" aria-hidden="true" />
            </Icon>
            <Icon isSize='small' isAlign='right'>
                <span className="fa fa-check" aria-hidden="true" />
            </Icon>
        </Control>
        <Help isColor='danger'>The password is not correct</Help>
    </Field>

		<Field>
		    <Label>Select:</Label>
		    <Control>
		        <Select>
		            <option>Option 1</option>
		            <option>Option 2</option>
		        </Select>
		    </Control>
		</Field>

		<Field>
		    <Label>Message</Label>
		    <Control>
		        <TextArea placeholder={'<TextArea />'} />
		    </Control>
		</Field>

		<Field>
		    <Control>
		        <Checkbox> I agree </Checkbox>
		    </Control>
		</Field>

		<Field>
		    <Control>
		        <Radio name="question"> Yes </Radio>
		        <Radio name="question"> No </Radio>
		    </Control>
		</Field>

		<p>We need to add a date picker</p>

    </Container>
  ))
  .add('Table', () => (
    <Container>
    	<Table isBordered isFullWidth isStriped>
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
		</Table>
    </Container>
  ))
  .add('Tag', () => (
    <Container>
    	<Tag isColor='primary'>Primary</Tag>{' '}
		<Tag isColor='info'>Information</Tag>{' '}
		<Tag isColor='light'>Muted</Tag>{' '}
		<Tag isColor='success'>Success</Tag>{' '}
		<Tag isColor='danger'>Danger</Tag>{' '}
    </Container>
  ))
  .add('Progress', () => (
    <Container>
    <p>Progress bar</p>
    	<Progress isColor='primary' value={30} max={100}/>
    </Container>
  ))
  .add('Notification', () => (
    <Container>
    <Notification>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
</Notification>
<Notification isColor='primary'>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
</Notification>
<Notification isColor='info'>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
</Notification>
    </Container>
  ))
  .add('Typography', () => (
    <Container>
        <Title isSize='1' tag='h1'>Title 1</Title>
		<Title isSize='2' tag='h2'>Title 2</Title>
		<Title isSize='3' tag='h3'>Title 3</Title>
		<Title isSize='4' tag='h4'>Title 4</Title>
		<Title isSize='5' tag='h5'>Title 5</Title>
		<Title isSize='6' tag='h6'>Title 6</Title>
		<Heading>Label Heading</Heading>
		<Box><p>The system font for LIC public facing sites is Booster Next FY. Booster Next FY is a friendly, round, sans-serif typeface that requires a license to install. 
To ensure we have consistent and predictable sizing in all browsers we use a root (base) font size of 16px. We use an rem unit is relative to the root element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that. </p></Box>
    <Box><p>You can wrap semantic html with the <code>Content</code> tag</p></Box>
		<Content>
		    <h1>Content</h1>
		    <p>Is the component to handle WYSIWYG generated content</p>
		</Content>
    </Container>
  ))
storiesOf('Components', module)
  .add('Breadcrumb', () => (
  	<Container>
  	    <Breadcrumb>
  		    <ul>
  		        <BreadcrumbItem><a>MINDA</a></BreadcrumbItem>
  		        <BreadcrumbItem><a>is</a></BreadcrumbItem>
  		        <BreadcrumbItem isActive><a>awesome</a></BreadcrumbItem>
  		    </ul>
  		</Breadcrumb>
  	</Container>
  ))
  .add('Card', () => (
    <Container>
      <Card>
        <CardHeader>
            <CardHeaderTitle>
                Card title
            </CardHeaderTitle>
            <CardHeaderIcon>
                <Icon className="fa fa-angle-down" />
            </CardHeaderIcon>
        </CardHeader>
        <CardContent>
            <Content>
                People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                <br/>
                <small>11:09 PM - 30 October 2014</small>
            </Content>
        </CardContent>
        <CardFooter>
            <CardHeaderTitle>
                <Heading>Progress</Heading>
            </CardHeaderTitle>
        </CardFooter>
      </Card>
    </Container>
  ))
  .add('Pagination', () => (
    <Container>
    	<Pagination>
    <PageControl>Previous</PageControl>
    <PageControl isNext>Next</PageControl>
    <PageList>
        <Page><PageLink>1</PageLink></Page>
        <Page><PageEllipsis /></Page>
        <Page><PageLink>45</PageLink></Page>
        <Page><PageLink isCurrent>46</PageLink></Page>
        <Page><PageLink >47</PageLink></Page>
        <Page><PageEllipsis /></Page>
        <Page><PageLink >86</PageLink></Page>
    </PageList>
</Pagination>
    </Container>
  ))
  .add('Tab', () => (
    <Container>
    	<Tabs>
    <TabList>
        <Tab>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon>
                <span>Pictures</span>
            </TabLink>
        </Tab>
        <Tab isActive>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-music' aria-hidden='true' /></Icon>
                <span>Music</span>
            </TabLink>
        </Tab>
        <Tab>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-film' aria-hidden='true' /></Icon>
                <span>Video</span>
            </TabLink>
        </Tab>
        <Tab>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-text' aria-hidden='true' /></Icon>
                <span>Documents</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>
    </Container>
  ))

