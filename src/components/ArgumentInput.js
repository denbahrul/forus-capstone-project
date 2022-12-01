import React from "react";
import "../styles/add.css";

class ArgumentInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      argument: "",
      sumber: "",
      instansi: "",
      kategori: "",
      chcboxValue: false,
      maxText: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onArgumentChangeEventHandler = this.onArgumentChangeEventHandler.bind(this);
    this.onSumberChangeEventHandler = this.onSumberChangeEventHandler.bind(this);
    this.onInstansiChangeEventHandler = this.onInstansiChangeEventHandler.bind(this);
    this.onKategoriChangeEventHandler = this.onKategoriChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onCheckboxChangeEventHandler = this.onCheckboxChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const maxChar = 50;
    const titleInput = event.target.value.slice(0, maxChar);
    const titleInputLength = titleInput.length;

    this.setState(() => {
      return {
        title: titleInput,
        maxText: maxChar - titleInputLength,
      };
    });
  }

  onArgumentChangeEventHandler(event) {
    this.setState(() => {
      return {
        argument: event.target.value,
      };
    });
  }

  onSumberChangeEventHandler(event) {
    this.setState(() => {
      return {
        sumber: event.target.value,
      };
    });
  }

  onInstansiChangeEventHandler(event) {
    this.setState(() => {
      return {
        instansi: event.target.value,
      };
    });
  }

  onKategoriChangeEventHandler(event) {
    this.setState(() => {
      return {
        kategori: event.target.value,
      };
    });
  }

  onCheckboxChangeEventHandler() {
    this.setState(() => {
      return {
        chcboxValue: !this.state.chcboxValue,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addArgument(this.state);
  }

  render() {
    return (
      <div className="input-container">
        <div className="note-input">
          <div className="profile-item__image">
            <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/671.jpg" alt="profil avatar"/>
          </div>
          <form className="form-add__argument" onSubmit={this.onSubmitEventHandler}>
            <div className="form-category">
              <p>Kategori :</p>
              <select className="category-list" type="text" placeholder="Kategori" required value={this.state.kategori} onChange={this.onKategoriChangeEventHandler}>
                <option value='Ekonomi'>Ekonomi</option>
                <option value='Teknologi'>Teknologi</option>
                <option value='Pemerintahan'>Pemerintahan</option>
                <option value='Sosial'>Sosial</option>
                <option value='Undang-undang'>Undang-undang</option>
              </select>
            </div>
            <div>
              <p className="post__char-limit">Sisa karakter: {this.state.maxText}</p>
              <input className="post-input__title" type="text" placeholder="Judul Arguman" required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            </div>
            <textarea className="post-input__body" type="text" placeholder="Isi Argumen" required value={this.state.argument} onChange={this.onArgumentChangeEventHandler} />
            <div>
              <input className="post-input__source" type="link" placeholder="Link Sumber" value={this.state.sumber} onChange={this.onSumberChangeEventHandler} />
              <p className="source-desc">*Sertakan sumber untuk memperkuat argumen Anda (opsional)</p>
            </div>
            <input className="post" type="text" placeholder="Instansi Tujuan" required value={this.state.instansi} onChange={this.onInstansiChangeEventHandler} />
            <div className="post-checkbox">
              <input className="checkbox" type="checkbox" checked={this.state.chcboxValue} onChange={this.onCheckboxChangeEventHandler}/>
              <p className="check-label__post">Argumen yang saya berikan benar adanya. Apabila informasi yang di sebarkan tidak sesuai, seperti hoaks ataupun ujaran kebencian, dapat mengakibatkan terkena pelanggaran, termasuk adanya pelanggaran UU ITE yang dapat mengakibatkan hukum pidana.</p>
            </div>
            <div>
              <div className="post-button">
                <a className="cancel-button" href="/">Batal</a>
                <button className={this.state.chcboxValue ? "submit-button" : "submit-button__false"} type="submit" disabled={this.state.chcboxValue ? false : true}>Kirim</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ArgumentInput;
