import React from "react";
import Swal from "sweetalert2";

class CommentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            komentar: "",
            sumber: "",
        };

        this.onKomentarChangeEventHandler = this.onKomentarChangeEventHandler.bind(this);
        this.onSumberChangeEventHandler = this.onSumberChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onKomentarChangeEventHandler(event) {
        this.setState(() => {
            return {
                komentar: event.target.value,
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

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addComment(this.state);
        Swal.fire({icon: 'success', title:'Tanggapan ditambahkan', showConfirmButton: false, timer: 1500 });
    }

    render() {
        return (
            <form className="form-add__argument" onSubmit={this.onSubmitEventHandler}>
                <textarea className="post-input__body" type="text" placeholder="Komentar" required value={this.state.komentar} onChange={this.onKomentarChangeEventHandler} />
                <div>
                    <input className="post-input__source" type="text" placeholder="Link Sumber" value={this.state.sumber} onChange={this.onSumberChangeEventHandler} />
                    <p className="source-desc">*Sertakan sumber untuk memperkuat argumen Anda (opsional)</p>
                    <button className="submit-button" type="submit">Kirim</button>
                </div>
            </form>
        );
    }
}

export default CommentInput;