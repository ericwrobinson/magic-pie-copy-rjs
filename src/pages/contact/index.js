import React from 'react';
import { navigate } from 'gatsby-link';
import PageTransition from 'gatsby-plugin-page-transitions';
import styled from 'styled-components';

import { Header, Body} from '../../components/Typography';
import Layout from '../../components/Layout';

const Button = styled.button`
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.2;
  font-family: kansasnew, serif;
  background-colr: black;
  border-radius: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  min-height: 600px;
  padding-bottom: 88px;
  
  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Subheading = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 3px;
  font-family: sofia-pro, sans-serif;
  font-weight: bold;
  padding-bottom: 18px;
  color: rgba(0, 0, 0, .4);
`;

const HalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  background-color: white;

  @media only screen and (max-width: 780px) {
    width: 100%;
    margin-bottom: 42px;
    margin-left: 0;
    margin-right: 0;
  }
`;


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    let bodyCopy= 'Interested in working with Magic Pie Copywriting? Let’s do it! Text or call James at (716) 880.6014, or fill out the form to let us know what’s up.'

    return (
       <PageTransition>
        <Layout>
          <section className="section">
            <div className="container">
              <Wrapper>
                <HalfWrapper>
                  <Subheading>
                    Contact
                  </Subheading>
                  <Header h2>Let’s make some magic happen.</Header>
                  <Body>{bodyCopy}</Body>
                </HalfWrapper>
                <HalfWrapper>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'phone'}>
                        Phone
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'phone'}
                          name={'phone'}
                          onChange={this.handleChange}
                          id={'phone'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <Button className="button" type="submit">
                        send
                      </Button>
                    </div>
                  </form>
                </HalfWrapper>
              </Wrapper>
            </div>
          </section>
        </Layout>
      </PageTransition>
    )
  }
}
