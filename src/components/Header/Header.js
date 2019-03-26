import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick() {
        console.log('GG');

    }

    renderListButton(passetab) {
        return passetab.map((valtab) => {
            return (
                <Button text={valtab} key={valtab} />
            )
        } )
    }

    renderListButton2(valtab) {
        return (
            <Button text={valtab} key={valtab} />
        )
    }

    render() {
        const tab = ['télés', 'pc', 'consoles']
        return (

            <div>
               <div onClick={this.handleClick}>Coucou Théo la pute</div> 
               <div onClick={() => {console.log('ma bite')}}>Yo le rap </div>
               { tab.map((valtab) => {
                   return (
                       <Button text={valtab} key={valtab} />
                   )
               } ) }

                    <div> {this.renderListButton(tab)} </div>

                { tab.map((valtab) => <Button text={valtab} key={valtab} /> ) }
                <div>{ tab.map(valtab => <Button text={valtab} key={valtab} /> ) }</div>
                <div> { tab.map(valtab => this.renderListButton2(valtab) )} </div>
                <div> { tab.map(this.renderListButton2)} </div>
            </div>

            

        );
    }
}
Header.propTypes = {};

export default Header;