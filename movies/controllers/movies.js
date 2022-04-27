const axios = require("axios");
exports.searchMovie = async (req, res) => {
    const searchField = req.body.searchField;
    console.log("searchField",searchField);
    if(searchField == "" || searchField == null || searchField == undefined){
        return res.json({
            status:404,
            message:"Please Enter Vaild Movie Name"
        })
    }
    // var api = "https://www.omdbapi.com/?s=" + searchField + "&appid=${process.env.omdmapiKey}";
    var api = `https://www.omdbapi.com/?s=${searchField}&apikey=${process.env.OMDBAPIKEY}`;
    console.log("api",api);
    console.log("searchField",searchField);
    
    var getData = axios.get(api);
    await getData.then((info) => {
        console.log("info",info.data);
        return res.json({
            status:200,
            data:info.data
        })
    }).catch((err)=>{
        console.log("err",err)
    })

}