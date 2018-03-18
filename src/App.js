import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    name: '',
    married: false,
    languages: [],
    birthYear: new Date(Date.now()).getFullYear()
  };

  nameHandler = (e) => this.setState({ name: e.target.value });

  genderHandler = (e) => this.setState({ gender: e.target.value });

  marriedHandler = (e) => this.setState({ married: e.target.checked });

  languageHandler = (e) => {
    const languageIndex = this.state.languages.findIndex(l => l === e.target.value);

    if (languageIndex === -1) {
      this.setState({ languages: [...this.state.languages, e.target.value] });
    } else {
      this.setState({
        languages: [
          ...this.state.languages.slice(0, languageIndex),
          ...this.state.languages.slice(languageIndex + 1)
        ]
      });
    }
  };

  birthYearHandler = (e) => this.setState({ birthYear: e.target.value });

  submitHandler = (e) => {
    e.preventDefault();
    console.log(`%c${JSON.stringify(this.state, null, 2)}`, "font-size: 20px;")
  };

  renderBirthYearOptions = () => {
    const BEGINNING_YEAR = 1940;
    const currentYear = new Date(Date.now()).getYear();
    const year1940 = new Date(BEGINNING_YEAR, 0, 1).getYear();
    const years = Array.from(Array(currentYear - year1940 + 1), (x, i) => BEGINNING_YEAR + i);
    return years.map(year => <option value={year} key={year}>{year}</option>);
  };

  render() {
    return (
      <div className="container forms-app">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={this.submitHandler}>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" placeholder="Your name"
                         value={this.state.name} onChange={this.nameHandler}/>
                </div>
              </div>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div className="col-sm-10">
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" name="gender"
                             id="male" value="male" onChange={this.genderHandler} />
                      <label className="custom-control-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" name="gender"
                             id="female" value="female"  onChange={this.genderHandler} />
                      <label className="custom-control-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" name="gender"
                             id="other" value="other" onChange={this.genderHandler} />
                      <label className="custom-control-label" htmlFor="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Married</legend>
                  <div className="col-sm-10">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input" type="checkbox" name="married"
                             id="marriedYes" checked={this.state.married} onChange={this.marriedHandler} />
                      <label className="custom-control-label" htmlFor="marriedYes">
                        Yes
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Language</legend>
                  <div className="col-sm-10">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input" type="checkbox" name="language"
                             id="hindi" value="hindi" onChange={this.languageHandler} />
                      <label className="custom-control-label" htmlFor="hindi">
                        Hindi
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input" type="checkbox" name="language"
                             id="english" value="english" onChange={this.languageHandler} />
                      <label className="custom-control-label" htmlFor="english">
                        English
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="form-group row">
                <label htmlFor="birthYear" className="col-sm-2 col-form-label">Birth Year</label>
                <div className="col-sm-10">
                  <select className="custom-select" id="birthYear" value={this.state.birthYear}
                    onChange={this.birthYearHandler}>
                    { this.renderBirthYearOptions() }
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <pre>
              {JSON.stringify(this.state, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
