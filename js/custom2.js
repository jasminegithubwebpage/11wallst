$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 30) {
      $(".navCol").addClass("fixed-header")
  } else {
      $(".navCol").removeClass("fixed-header")
      }
  });
  // --------------------------------------------
  
  $('.toggle').click(function(){
    $('body').toggleClass('actNav');
  });
  
  $('.menuBackDrop').click(function(){
    $('body').removeClass('actNav');
  });
  
  $('.searchTogle').click(function(){
    $('body').addClass('actSearch');
  });
  $('.closeIcon').click(function(){
    $('body').removeClass('actSearch');
  });
  
  // --------------------------------------------
  $('.ddTrigger').click(function(){
    $(this).parent().toggleClass('actDD');
    $(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
  });
  $(document).on("click", function(event){
    var $trigger = $(".ddParent");
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".ddParent").removeClass('actDD');
    }
  });
  $(".tab-pane").each(function(){
    $(this).hide();
    if($(this).attr('id') == 'main') {
      $(this).show();
    }
  });
  $('.nav-tabs a').on( "click", function() {
      var id = $(this).attr('data-related');
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(".tab-pane").each(function(){
          $(this).hide();
          if($(this).attr('id') == id) {
              $(this).show();
              $(this).addClass('show');
          }
      });
  });
  
  

  
  


 // function to navigate in the menu bar
 function showContent(id) {
    console.log('nav-clicked');
  var sections = document.getElementsByClassName('content-section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  // Show the selected content section
  document.getElementById(id).style.display = 'block';
}
console.log('I am in custom2')
const npoint = "http://107.173.198.184:5000";
const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');
  //  Disply the trading view
const script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
script.innerHTML = JSON.stringify({
  "symbol": symbol,
  "width": "290",
  "colorTheme": "light",
  "isTransparent": true,
  "locale": "en"
});

document.getElementById('tradingview-widget').appendChild(script);
//  Display the profile details
async function ShowProfile()
{
  var data = await fetch(npoint +`/Company/${symbol}`);
  const profile = await data.json();
  var companyName = profile.companyName;
  var address = profile.address;
  var city = profile.city;
  var phone = profile.phone;
  var website = profile.website;
  var employees = profile.employees;
  var sector = profile.sector;
  var industry = profile.industry;
  var state = profile.state;
  var CEO = profile.CEO;
  var CEO = profile.CEO;
  var CEOWithPrefix = "Mr. " + CEO;
  document.getElementById('CEO').innerHTML = CEOWithPrefix;
  document.getElementById('employees').innerHTML = "EMPLOYEES: " + employees;
  document.getElementById('industry').innerHTML = "INDUSTRY: " + industry;
  document.getElementById('sector').innerHTML = "SECTOR: "+sector;
  document.getElementById('companyName').innerHTML = companyName;
  document.getElementById('address').innerHTML = address;
  document.getElementById('city').innerHTML = city;
  document.getElementById('state').innerHTML = state;
  document.getElementById('phone').innerHTML = phone;
  document.getElementById('website').innerHTML = website;
}
ShowProfile()
  // Display the Summary Navbar Details  
async function loadData() {
if (symbol) {
    try {
      var values = await fetch(npoint +`/Stock/${symbol}`);
      const result = await values.json();
      SummaryData = [];
      SummaryData.push(result.quote);
      const clickedData = SummaryData.filter(item => item.symbol === symbol);
      let preClose = document.getElementById('pre-close');
      preClose.innerHTML = clickedData[0].previousClose;
      document.getElementById('comp-name').innerHTML = clickedData[0].companyName;
      document.getElementById('Open').innerHTML = clickedData[0].iexOpen;
      document.getElementById('bid').innerHTML = clickedData[0].iexBidPrice;
      document.getElementById('ask').innerHTML = clickedData[0].iexAskPrice;
      document.getElementById('week52High').innerHTML = clickedData[0].week52High;
      document.getElementById('week52Low').innerHTML = clickedData[0].week52Low;
      document.getElementById('Volume').innerHTML = clickedData[0].volume;      
      var MarketCap =  clickedData[0].marketCap;
      var mark = MarketCap.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
      document.getElementById('marketCap').innerHTML = mark;
      document.getElementById('Avg-Volume').innerHTML = clickedData[0].avgTotalVolume;
      document.getElementById('Pe-Ratio').innerHTML = clickedData[0].peRatio;
      document.getElementById('previousVolume').innerHTML = clickedData[0].previousVolume;
      document.getElementById('extendedPrice').innerHTML = clickedData[0].extendedPrice;
      document.getElementById('delayedPrice').innerHTML = clickedData[0].delayedPrice;
      document.getElementById('extendedChange').innerHTML = clickedData[0].extendedChange;
      document.getElementById('latestPrice').innerHTML = clickedData[0].latestPrice;
      document.getElementById('high').innerHTML = clickedData[0].high;
      document.getElementById('latestPrice').innerHTML = clickedData[0].latestPrice;

// ------------------------------------DISPLAY THE FINANCIAL VALUES----------------------------
const data = await fetch(`${npoint}/Financials/${symbol}`);
if (!data.ok) {
  throw new Error(`HTTP error! status: ${data.status}`);
}
const FinData = await data.json();
if (FinData && FinData.financials && FinData.financials.length > 0) {
        var selectedData = FinData.financials[0];
        var dataToSet = [{ elementId: 'tot-rev', propName: 'totalRevenue' },    { elementId: 'cash-change', propName: 'cashChange' },    { elementId: 'grossProfit', propName: 'grossProfit' },    { elementId: 'operatingRevenue', propName: 'operatingRevenue' },    { elementId: 'EBITDA', propName: 'EBITDA' },   
         { elementId: 'totalCash', propName: 'totalCash' },    { elementId: 'totalDebt', propName: 'totalDebt' },    { elementId: 'treasuryStock', propName: 'treasuryStock' },    { elementId: 'totalInvestingCashFlows', propName: 'totalInvestingCashFlows' },    { elementId: 'cashChange', propName: 'cashChange' },    
         { elementId: 'cashFlow', propName: 'cashFlow' },    { elementId: 'commonStock', propName: 'commonStock' },    { elementId: 'incomeTax', propName: 'incomeTax' },    { elementId: 'operatingExpense', propName: 'operatingExpense' },    { elementId: 'operatingIncome', propName: 'operatingIncome' },    { elementId: 'pretaxIncome', propName: 'pretaxIncome' },    
         { elementId: 'totalLiabilities', propName: 'totalLiabilities' },    { elementId: 'subkey', propName: 'operatingExpense' },    { elementId: 'totalAssets', propName: 'totalAssets' },  ];
        dataToSet.forEach((data) => {
          document.getElementById(data.elementId).innerHTML = selectedData[data.propName];
        });
      } 
      else {
        console.log("No results found.");
      }
      return symbol;
}
     catch (err) {
      console.log(err);
    }
  }
}
//  Display the hidden news
const readMoreBtn = document.getElementById('more');
const showing = document.getElementById('show');
const readMoreText = 'Read More...';
const readLessText = 'Read Less';

readMoreBtn.addEventListener('click', function () {
  if (showing.style.display === 'none') {
    showing.style.display = 'block';
    readMoreBtn.textContent = readLessText;
  } else {
    showing.style.display = 'none';
    readMoreBtn.textContent = readMoreText;
  }
});



    //  DISPLAY THE SUMMARY NAVBAR PARTICULAR COMPANY NEWS
  async function SumNews() {
    SummaryNews = [];
    var datas = await fetch(npoint +`/Stock/${symbol}`);
    var Article = await datas.json();
    var DataNews = Article.news;
    SummaryNews.push(DataNews);
   for (k = 0; k < 10; k++) {
      var inc = k + 1;
      var HeadlineId = "head" + inc;
      var ImageId = "img" + inc;
      var SummaryId = "summary" + inc;
      var urlId = "url" + inc;
      var summary = DataNews[k]?.summary;
      var summaryText = summary ? sliceSummary(summary) : '';
      document.getElementById(HeadlineId).innerHTML = DataNews[k]?.headline || '';
      document.getElementById(SummaryId).innerHTML = summaryText;
      document.getElementById(ImageId).src = DataNews[k]?.image || '';
      document.getElementById(urlId).href = DataNews[k]?.url || '#';
      function sliceSummary(Summary) {
      const maxLength = 200;
      if (!Summary) {
          // If Summary is undefined or null, return an empty string
      return '';
      } else if (Summary.length <= maxLength) {
          // The summary is already short enough
          return Summary;
        } else {
          // Find the last space before the maximum length
          const lastSpaceIndex = Summary.lastIndexOf(' ', maxLength);
          if (lastSpaceIndex === -1) {
            // If no space is found, just slice the summary to the maximum length
            return Summary.slice(0, maxLength);
          } else {
            // Slice the summary to the last space before the maximum length
            return Summary.slice(0, lastSpaceIndex);
          }
        }
      }
    }
  }
  
  // Call the function to fetch news data and update HTML elements
  SumNews();
//CODE TO NAVIGATE THE STOCK PAGE THROUGH SEARCH BAR
const search = document.getElementById('exampleFormControlInput1');
search.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const symbol = search.value;
    window.location.href = `stock.html?symbol=${symbol}`;
  }
});