import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ImageBlock from "./ImageBlock";
import BlackBlock from "./BlackBlock";
// import ParalaxBlock from "./ParalaxBlock";
import ArticlesBlock from "./ArticlesBlock";
// import ServiseBlock from "./ServiseBlock";
// import ContactBlock from "./ContactBlock";
import  axios  from 'axios'
import { Route } from 'react-router-dom';

import ScrollableAnchor from 'react-scrollable-anchor'

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Offers extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            slider: [],
            whiteBlock: [],
            listLeft: [],
            listRight: [],
            articlesBlock: [],

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/drivers")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        axios.get('/api/v1/page/offers/white')
            .then(response => this.setState({whiteBlock: response.data}));
        axios.get('/api/v1/page/offers/list-left')
            .then(response => this.setState({listLeft: response.data}));
        axios.get('/api/v1/page/offers/list-right')
            .then(response => this.setState({listRight: response.data}));
        axios.get(url + "page/home/articles")
            .then(response => response.data)
            .then(data =>this.setState({articlesBlock: data}));
    }


    render() {
        let loading = true;
        if( this.state.seo.length == 0 || this.state.whiteBlock.length == 0 || this.state.listLeft.length == 0 || this.state.listRight.length == 0)  {
            loading = false;
        }

        return (

            <React.Fragment>



                <div className={ loading ? "loading-success sweet-loading" : 'load sweet-loading' }>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>

                { loading ? <div>
                    <Breadcrumbs seo={this.state.seo}/>
                    <ImageBlock whiteBlock = { this.state.whiteBlock } />
                    <ScrollableAnchor id={'perks'}>
                        <BlackBlock listLeft = { this.state.listLeft } listRight = { this.state.listRight } />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'body'}>
                        <ArticlesBlock articlesBlock = { this.state.articlesBlock } />
                    </ScrollableAnchor>
                </div> : "" }
                <Seo seo={this.state.seo}/>
            </React.Fragment>
        );
    }
}

export default Offers;