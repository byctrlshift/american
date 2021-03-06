import React, { Component } from "react";
import  axios  from 'axios'
import serialize from 'form-serialize';
import InputMask from 'react-input-mask';
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';

class ContactsForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        // const data = new FormData(form);
        // const data1 = [];
        // for (let name of data.keys()) {
        //     const input = form.elements[name];
        //     // const parserName = input.dataset.parse;
        //
        //     data1[ input.name ] = input.value;
        // }
        // console.log(data1);
        // const form1 = document.getElementsByClassName('contacts-form__fields')[0];


        const str = serialize(form);
        console.log(str);
        axios({
            method: 'post',
            url: 'http://american.truck.origami.ua/api/v1/page/contacts/submit',
            data: str,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response);
            let text = document.getElementById('success');
            text.innerText = response.data['message'];

            let popUp = document.getElementsByClassName('pop-up-wrap')[0];
            popUp.classList.add('open');

            setTimeout(function () {
                popUp.classList.remove('open');
            }, 3000);
        });
        // console.log(data.name);
    }


    handleChange(event) {
        if( event.target.value != '' ){
            event.target.classList.add('no-empty');
        }
        else {
            event.target.classList.remove('no-empty');
        }
    }


    render() {
        return (
            <div>
                <section className="block contact-block" >
                    <form className="contacts-form__fields" name="lol" onSubmit={this.handleSubmit}>
                        <h2 className="contacts-form__title block__title">CONTACT US</h2>
                        <div className="contacts-form__inputs">
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input required="required" type="text" id="name-filed" name="name" onChange={this.handleChange} />
                                <label htmlFor="name-filed">Name</label>
                            </div>
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input required="required" type="text" id="surname"  name="surname" onChange={this.handleChange} />
                                <label htmlFor="surname">Surname</label>
                            </div>
                        </div>
                        <div className="contacts-form__inputs">
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input required="required" type="email" id="e-mail"  name="email"  onChange={this.handleChange} />
                                <label htmlFor="e-mail">E-mail</label>
                            </div>
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                {/*<input type="text" id="phone-filed"  name="telephone" onChange={this.handleChange} />*/}
                                <InputMask required="required" name="telephone" id="phone-filed" mask="+1 999 999 99 99" maskChar={null} onChange={this.handleChange}>
                                    {/*{(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}*/}
                                </InputMask>
                                <label htmlFor="phone-filed">Phone</label>
                            </div>
                        </div>
                        <div className="contacts-form__textarea contacts-form__inputs-wrap">
                            <textarea required="required" name="body" id="message-filed" defaultValue={""} onChange={this.handleChange} />
                            <label htmlFor="message-filed">Message</label>
                        </div>
                        <div className="contacts-form__buttons">
                            <button className="block__button block__button--red block__button--contacts" href="#">SEND</button>
                        </div>
                    </form>
                    {
                        this.props.contactBlock.map((item, index) =>
                            <div className="block__contacts" key={index}>
                                <div className="block__contacts-wrap">
                                    <h2 className="block__title">{ item.title }</h2>
                                    <h3 className="block__subtitle">{ ReactHtmlParser(item.address) }</h3>
                                    <h3 className="block__subtitle"><a className={'block__subtitle'} href={'mailto:' + item.email }> { item.email }</a></h3>
                                    <h3 className="block__subtitle"><a className={'block__subtitle'} href={'tel:' + item.phone }> { item.phone }</a></h3>

                                    <a className="block__contacts-btn block__contacts-btn--facebook" href="#" />
                                    <a className="block__contacts-btn block__contacts-btn--twitter" href="#" />
                                    {/*<a className="block__contacts-btn block__contacts-btn--google" href="#" />*/}
                                </div>
                            </div>
                        )
                    }
                </section>
                <section className="contscts-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23342.88386017628!2d-75.06919339602631!3d40.02826459813392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b5d06953d285%3A0x9926cb7c5ae611c1!2zNjIyNSBUYWNvbnkgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxMzUsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1542025636755"
                        width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                </section>

                <div className="pop-up-wrap">
                    <div className="pop-up">
                        <h2 className="pop-up-text" id={'success'}>
                            Your mail was sanded
                        </h2>
                        <svg id="successAnimation" className="animated" xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 70 70">
                            <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
                            <circle id="successAnimationCircle" cx={35} cy={35} r={24} stroke="#979797" strokeWidth={2} strokeLinecap="round" fill="transparent" />
                            <polyline id="successAnimationCheck" stroke="#979797" strokeWidth={2} points="23 34 34 43 47 27" fill="transparent" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactsForm;