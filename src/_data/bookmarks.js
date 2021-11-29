var axios   = require('axios');

async function getBookmarks() {
    if (process.env.CONTEXT == "production") {
        var url = `https://abc-netlify-bookmarks.netlify.app/.netlify/functions/bookmarks`;
    } else { 
        var url = `http://localhost:9000/.netlify/functions/bookmarks`
    }
    console.log(`this is the url: ${url}`);

    let data = await axios.get(url)
    .then(function (response) {
        console.log(`Returned: ${response.data.length} bookmark(s)`);
        return response.data;
    })
    .catch(function(err) {
        console.log(err);
    });
    return data;
}

module.exports = async function() {
    let data = await getBookmarks()
    
    return data
    
}
