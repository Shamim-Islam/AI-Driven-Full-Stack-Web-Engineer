function useState(initialvalue) {
    let value = initialvalue;
    
    function setValue(newValue) {
        value = newValue;
    }


    return value;
}

const counter = useState(0)