
// traditional object

const creatStudent = (name: string, age: number, email: string) => {

    const obj = {name, age, email}
    return obj;

}

const rafi = creatStudent('rafi', 22, 'rafi@gmail.com')
const sadia = creatStudent('sadia', 22, 'sadia@gmail.com')

console.log(rafi, sadia);