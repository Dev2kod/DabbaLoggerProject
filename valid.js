const str = "{{asdf {{ghj}} }} {{DWE}}{{s}} {{rojgar_Yoajana}} {{[ladkiBahinshod}}";

const arr = str.match(/\{\{[\s\S]*?\}\}/g) || [];

console.log(arr);

const finalSet = new Set();



const removeBrace = (varName) => {
    for (let i = 0; i < 2; i++) {
        if (
            varName[i] !== "{" ||
            varName[varName.length - i - 1] !== "}"
        ) {
            console.log("abe zhaatu galat likha hai");
            return "*";
        }
    }
    return varName.slice(2, -2);
};

const isValidStart = (ch) => {
    return (
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        ch === "$" ||
        ch === "_"
    );
};

const isValidChar = (ch) => {
    return (
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9") ||
        ch === "$" ||
        ch === "_"
    );
};

const validateVar = (final) => {

    if (final[0] === "{") {
        console.log("lavde itne bracket kon dalta hai !!!");
        return;
    }

    if (!isValidStart(final[0])) {
        console.log("lavde variable likhna nhi aata kya !!");
        console.log("yaha galti hai :", final[0]);
        return;
    }

    for (let i = 0; i < final.length; i++) {
        if (!isValidChar(final[i])) {
            console.log(`Invalid character: ${final[i]}`);
            return;
        }
    }

    console.log("sab changaaa si, le tera variable:", final);
    console.log("set me add kr rha isse");
    finalSet.add(final);
};

const checkVar = (variable) => {
    const final = removeBrace(variable);
    console.log("Extracted:", final);
    validateVar(final);
    console.log(`
.
.
.
`);

    
};

arr.forEach(variable => checkVar(variable))

finalSet.forEach(val => console.log("SET:", val));
