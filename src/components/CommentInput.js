import React from "react";
import Swal from "sweetalert2";

class CommentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
            sumber: "",
        };
    }

    onCommentChangeEventHandler(event) {
        this.state(() => {
            return {
                comment: event.target.value,
            };
        });
    }

    onSumberChangeEventHandler(event) {
        this.state(() => {
            return {
                sumber: event.target.value,
            };
        });
    }

    /*onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addArgument(this.state);
        Swal.fire({icon: 'success', title:'Tanggapan ditambahkan', showConfirmButton: false, timer: 1500 });
    }*/

    render() {
        return (
            <form className="form-add__argument">
                <textarea className="post-input__body" type="text" placeholder="Komentar" required value={this.state.comment} onChange={this.onCommentChangeEventHandler} />
                <div>
                    <input className="post-input__source" type="link" placeholder="Link Sumber" value={this.state.sumber} onChange={this.onSumberChangeEventHandler} />
                    <p className="source-desc">*Sertakan sumber untuk memperkuat argumen Anda (opsional)</p>
                </div>
            </form>
        )
    }
}

export default CommentInput;