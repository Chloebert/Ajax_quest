function fetchSimpsonQuoteJSON() {
    const quoteId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[0]; // response.data instead of response.json() with fetch
      })
      .then(function(simpsonQuote) {
        console.log('data decoded from JSON:', simpsonQuote);
  
        // Build a block of HTML
        const simpsonQuoteHtml = `
          <p><strong>${simpsonQuote.character}</strong></p>
          <img src="${simpsonQuote.image}" />
          <p>"${simpsonQuote.quote}" </p>
        `;
        document.querySelector('#simpson-quotes').innerHTML = simpsonQuoteHtml;
      });
  }
  
  fetchSimpsonQuoteJSON();