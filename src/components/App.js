import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/addPage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import {BottomNavbar, Navbar} from "./Navbar";
import {LeftBar, RightBar} from "./SideBar";
import { getUserLogged,putAccessToken } from "../utils/api";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: 1,
    }


  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  render() {
    if (this.state.authedUser === null) {
      return (
        <div className="app-container">
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
      );
    }

    return (
      <div className="app-container">
        <Navbar />
        <div className="wrapper">
          <LeftBar />
          <main>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/addArgument" element={<AddPage />} />
            <Route path="/argument/:id" element={<DetailPage />} />
          </Routes>
          </main>
          <RightBar />
        </div>
        <BottomNavbar />
      </div>
    );
  }
}

export default App;