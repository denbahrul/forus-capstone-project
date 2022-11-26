import React from "react";

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
      <div className="note-input">
        <h2>Buat Argument</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <input className="post" type="text" placeholder="Kategori" required value={this.state.kategori} onChange={this.onKategoriChangeEventHandler} /><br></br>
          <p className="post__char-limit">Sisa karakter: {this.state.maxText}</p>
          <input className="post" type="text" placeholder="Judul Arguman" required value={this.state.title} onChange={this.onTitleChangeEventHandler} /><br></br>
          <textarea className="post-input__body" type="text" placeholder="Isi Argumen" required value={this.state.argument} onChange={this.onArgumentChangeEventHandler} /><br></br>
          <input className="post" type="text" placeholder="Link Sumber" required value={this.state.sumber} onChange={this.onSumberChangeEventHandler} /><br></br>
          <input className="post" type="text" placeholder="Instansi Tujuan" required value={this.state.instansi} onChange={this.onInstansiChangeEventHandler} /><br></br>
          <input className="post" type="checkbox" checked={this.state.chcboxValue} onChange={this.onCheckboxChangeEventHandler}/>
          <p>Argumen yang saya berikan benar adanya. Apabila informasi yang di sebarkan tidak sesuai, seperti hoaks ataupun ujaran kebencian, dapat mengakibatkan terkena pelanggaran, termasuk adanya pelanggaran UU ITE yang dapat mengakibatkan hukum pidana.</p><br></br>
          <a href="/">Batal</a>
          <button type="submit" disabled={this.state.chcboxValue ? false : true}>Kirim</button>
        </form>
      </div>
    );
  }
}

export default ArgumentInput;
