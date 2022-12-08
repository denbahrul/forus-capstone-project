import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Navbar from './Navbar';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import { LeftBar, RightBar } from './SideBar';
import LoadingPage from '../pages/LoadingPage';
import NotFoundPage from '../pages/NotFoundPage';
import { getUserLogged } from '../utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });

    localStorage.setItem('authedUser', data);
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    localStorage.removeItem('authedUser');
  }

  render() {
    const { authedUser, initializing } = this.state;

    if (initializing) {
      return <LoadingPage />;
    }

    if (authedUser === null) {
      return (
        <Routes>
          <Route
            path='/'
            element={<LoginPage loginSuccess={this.onLoginSuccess} />}
          />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      );
    }

    return (
      <div className='app-container'>
        <Navbar logout={this.onLogout} />
        <div className='wrapper'>
          <LeftBar />
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/add' element={<AddPage />} />
              <Route path='/argument/:id' element={<DetailPage />} />
            </Routes>
          </main>
          <RightBar />
        </div>
      </div>
    );
  }
}

export default App;
