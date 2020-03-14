function getData()
{
    // Here an expensive call is done such as getting data from a server or creating a database connection.

    getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        alert('Your query count: ' + data.query.count);
      }
    });
}

function calculateFinancialQuotes()
{
    // Instead of recalling and reitering through the object every time, we create it as an object and access it through the object, requiring to only make the expensive call once
    let financialData = getData()
    let calculation = 5*2;
    let output;
    let calculation2 = 5*3;
    let output2;

    output = financialData.value * calculation
    output2 = financialData.value * calculation2

    // The getData method acts as a proxy, instead of having to call the api twice, we can store it in an object created by a seperate function. 
 }   