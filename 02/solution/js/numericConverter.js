// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
function numericConverter(dec) {
    return {
        binary: dec.toString(2),
        octal: dec.toString(8),
        hexa: dec.toString(16)
    }
}

export default numericConverter;
