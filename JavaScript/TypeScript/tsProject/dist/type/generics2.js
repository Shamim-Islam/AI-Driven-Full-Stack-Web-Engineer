"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useState(initialvalue) {
    let value = initialvalue;
    function setValue(newValue) {
        value = newValue;
    }
    return value;
}
const counter = useState(0);
//# sourceMappingURL=generics2.js.map