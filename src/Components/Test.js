import fileName from "../test.txt";
const fs = require('fs');
const Test = () => {
    const readData=()=>{
        // let roll=169656;
        fs.readFile(fileName, 'utf8', function(err, data){
            let vv=[];
            let re=data.search("169679");
            for(let i=8;i <= 11;i++){
                vv.push(data[re+i])
            }
            let pp=vv.join('')
            console.log(pp);
        });
    }
    return ( 
        <div>
            <button onClick={readData}>show</button>
        </div>
     );
}
 
export default Test;