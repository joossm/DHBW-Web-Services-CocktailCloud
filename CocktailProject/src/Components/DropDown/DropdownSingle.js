import React, {useState} from 'react';
import Select from 'react-select';
import './DropdownSingle.css'

//Dropdown Fenser als Single-Choice
function DropdownSingle({title, items, onItemsChanged}) {
    var [chosenItems, setValue] = useState();
    var Ddlhandle = (e) => {
        const value = Array.isArray(e) ? e.map(x => x.label) : [];
        setValue(value);
        onItemsChanged(value);
        console.log(value)
    }
    return (
        <div className="Auswahl">
            {title}<Select options={items} onChange={(e) => Ddlhandle(e)}></Select>
            {chosenItems}
        </div>
    );
}

export default DropdownSingle;
