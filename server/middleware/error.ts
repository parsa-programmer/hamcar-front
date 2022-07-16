import { useQuery, defineMiddleware } from "h3";

export default defineMiddleware((req, res, next) => {
  if(res.statusCode==404){
    console.log("404!!")
  }

 var r= next();

});
