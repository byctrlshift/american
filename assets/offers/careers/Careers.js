import React, { Component } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";
import  axios  from 'axios'

import Seo from "../../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Careers extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            contactBlock: [],


        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/contacts")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        // axios.get(url + "page/contacts")
        //     .then(response => response.data)
        //     .then(data =>this.setState({contactBlock: data}));
    }


    render() {
        let loading = true;
        if( this.state.seo.length == 0 )  {
            // if( this.state.seo.length == 0 || this.state.contactBlock.length == 0 )  {
            loading = false;
        }

        return (

            <React.Fragment>
                <div className={ loading ? "loading-success sweet-loading" : 'load sweet-loading' }>
                    <ClipLoader
                        sizeUnit={ "px" }
                        size={ 150 }
                        color={ '#123abc' }
                        loading={ this.state.loading }
                    />
                </div>

                { loading ? <div>
                    <Breadcrumbs seo={ this.state.seo }/>

                    <section className="content-wrap">
                        <section className="team-block">

                            {/*{ this.props.whiteBlock.map((item, index) =>*/}

                                <div className="team-block__left" >
                                    <h2 className="team-block__left_title">
                                        {/*{ item.first_blc_title }*/}
                                        Company overview
                                        </h2>
                                    <h3 className="team-block__left_subtitle">
                                        {/*{ item.first_blc_sub_title }*/}
                                        Grand USA Transport is a small, well managed, aggressively growing family owned, and established business. Our fleet is comprised of 30 trucks and expanding fast.
                                        </h3>
                                    <p className="team-block__left_desc desc--margin">
                                        {/*{ item.first_blc_description }*/}
                                        Equipment: Our Fleet, Our Iron Horses, Our Calvary.
                                        To empower our drivers to do what they need to do, we provide them top of the line equipment, 2016-2018 Freightliners and Volvos. All trucks equipped with inverters, microwave, refrigerator. The fleet keeps our drivers safe and rolling, perpetually increasing their revenue enabling us Grand USA Transport, as a company to expand, and perpetuate our future vision, vastly increase our revenue, enabling us to realize our further expansion into the future. Our trucks are maintained on premises at our company-owned facility.
                                        Our Drivers. Our infantry. Our boots on the ground. Our expanding family.
                                        We VALUE and EMBRACE our drivers as part of our relationship oriented growing family. If you are ready to grow with us and become part of our intimate family, rather than a just driver number.
                                        Ensuring our future by building your future. Let’s build our future together! Call us today.
                                    </p>
                                    <NavLink className="block__button block__button--red" exact to="/offers/application-form" >Click to apply</NavLink>
                                </div>

                            {/*) }*/}

                            <div className="team-block__right">
                                <div className="team-block__right_img"
                                     style={{background: 'url(/bundles/frontend/images/about/250601.jpg) center center no-repeat', backgroundSize: 'contain'}}/>
                            </div>
                        </section>
                    </section>


                    <React.Fragment>
                        <section className="block black-block">

                            {/*{*/}
                                {/*this.props.blackBlock.map((item, index) =>*/}
                                    <div className="block__wrap" >
                                        <div className="block__content aos-init" data-aos="fade-up" >
                                            <h2 className="block__title"  >
                                                {/*{ item.second_blc_title }*/}
                                                REASONS TO BECOME
                                                PART OF GRAND USA
                                                TRANSPORT
                                            </h2>
                                            <h3 className="block__subtitle aos-init">
                                                {/*{ item.second_blc_sub_title }*/}
                                                BENEFITS & PAY
                                                </h3>
                                            <ul className="block__list block__list--flex">
                                                {/*{ this.props.blackBlock[this.props.blackBlock.length - 1].map((item, index) =>*/}
                                                    <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                    </li>
                                                    <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                    </li>
                                                    <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                    </li>
                                                    <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                    </li>
                                                    <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                    </li>
                                                {/*) }*/}
                                            </ul>
                                        </div>
                                        <div className="block__right">

                                            <h3 className="block__subtitle aos-init">
                                                EXPERIENCED DRIVER REQUIREMENTS 3YRS.+
                                            </h3>
                                            <ul className="block__list block__list--flex">
                                                {/*{ this.props.blackBlock[this.props.blackBlock.length - 1].map((item, index) =>*/}
                                                <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                </li>
                                                <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                </li>
                                                <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                </li>
                                                <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                </li>
                                                <li className="block__list-item block__list-item--w48">
                                                        <span className="block__list-link block__list-link--alter-hover block__list-link--about aos-init" data-aos="fade-down">
                                                            Great team environment
                                                        </span>
                                                </li>
                                                {/*) }*/}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }


                        </section>
                    </React.Fragment>

                </div> : "" }


            </React.Fragment>
        );
    }
}

export default Careers;