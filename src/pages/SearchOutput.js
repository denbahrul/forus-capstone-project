import React from "react";
import SearchNotFound from "./SearchNotFound";
import moment from "moment/moment";

const SearchOutput = ({output}) => {
    return (
        <div>
           {
            (output.length > 0) ?
            (output[0] == 'empty') ? '' :
            output.map((item) => 
                <div className="card mb-2" key={item.id}>
                    <div className="card-body">
                        <div className="p-3 d-flex">
                            <div>
                                <img className="img-user" src="./img/default-user.png" />
                            </div>
                            <div>
                                <strong style={
                                    {
                                     textTransform: "capitalize"
                                    }}>{item.title}</strong>
                                <i 
                                style={
                                    {
                                        display: "block",
                                        fontSize: "12px",
                                        textTransform: "capitalize",
                                        color: '#7c7c7c'
                                    }
                                    }>{item.name} &#8226;  {moment(item.createdAt).format('DD MMMM YYYY HH:mm')}</i>
                                    <p style={{fontSize: '13px', marginTop: '5px'}}>
                                        {item.argument}
                                    </p>

                                    {/* FOOTER */}
                                    <div className="d-flex">
                                        <div className="flex-fill icon-footer">
                                            <img src="./img/like.png" /> <small>Upvote</small>
                                            <img src="./img/dislike.png" />
                                        </div>
                                        <div className="flex-fill icon-footer">
                                            <img src="./img/comment.png" /> <small>Comment</small>
                                        </div>
                                        <div className="flex-fill icon-footer">
                                            <img src="./img/share.png" /><small>Share</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <SearchNotFound />
           }
        </div>
    );
}

export default SearchOutput;