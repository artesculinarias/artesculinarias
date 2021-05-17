import React from 'react';
import '../atoms/text.css'

const TextField = ({content, textType}) => {
    return (
        <div className="text-field-container">
            <div className={"textField " + "textfield__" + textType}>
                {content}
            </div>
        </div>
    );
};

export default TextField;