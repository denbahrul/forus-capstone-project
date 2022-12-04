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
                    <div className="border-bottom p-3">
                        <strong>{item.name}</strong>
                        <i 
                        style={
                            {
                                display: "block",
                                fontSize: "12px"
                            }
                            }>{moment(item.createdAt).format('DD/MM/YYYY HH:mm')}</i>
                    </div>
                    <div className="card-body">
                        <strong className="content-title">{item.title}</strong>
                        <p>
                            {item.argument}
                        </p>
                    </div>
                </div>
            ) : <SearchNotFound />
           }
        </div>
    );
}

export default SearchOutput;