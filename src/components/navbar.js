import React from 'react';
import {Navigation, Drawer, Header, Layout, Content} from 'react-mdl';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    render(){
        return(
<div>
    <Layout>
        <Header className="headerColor" title={<span><strong><Link className="nameLink" to="/Portfolio-2.0/">Home</Link></strong></span>}>
            <Navigation>
                <Link to="/Portfolio-2.0/projects">Projects</Link>
                <Link to="/Portfolio-2.0/resume">Resume</Link>
                <Link to="/Portfolio-2.0/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<span><strong><Link className="nameLink" to="/Portfolio-2.0/">Connor Dougherty</Link></strong></span>}>
            <Navigation>
                <Link to="/Portfolio-2.0/projects">Projects</Link>
                <Link to="/Portfolio-2.0/resume">Resume</Link>
                <Link to="/Portfolio-2.0/contact">Contact</Link>
            </Navigation>
        <Content />
        </Drawer>
    </Layout>
</div>
        )}};

export default Navbar;