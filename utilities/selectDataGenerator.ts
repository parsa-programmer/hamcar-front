import { SelectData } from "~~/models/utilities/SelectData";


export const GenerateTedadeGhest=():SelectData[]=>{
    let data:SelectData[]=[];
    for(let i=1;i<=60;i++){
        data.push({
            value:i,
            label:`${i} `
        })
    }
    return data;
}