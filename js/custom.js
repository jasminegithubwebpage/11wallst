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


$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
  });

  $('.moreless-card').click(function() {
    $('.moreCard').slideToggle();
    if ($('.moreless-card').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
    });

  //  --------------- Display the Most Active-------
const npoint = "http://107.173.198.184:5000";

async function fetchData() {
  try {
    const res = await fetch(npoint + "/MostActive");
    const data = await res.json();
    var temp = " ";
    var i;
    for (i = 0; i < 5; i++) {
      var symbol = data[i].symbol;
      var logo = await fetchLogo(symbol);
      // console.log('outside fetch ' + logo);
      temp += "<tr align=center>";
      temp += "<td> <img src='" + logo + "' width=60% height=60% >" + "</td>";
      temp += "<td>" + data[i].companyName + "</td>";
      var decimal = data[i].changePercent;
      var percent = (decimal * 100) ;
      var percent = percent.toFixed(2)
      if (percent > 0 && percent != 0) {
        temp += "<td>" + percent + "%"+ "  <img src=' images/green-arrow.jpeg' width=14 alt='Green-arrow'/>" + "</td>";
      } else if (percent < 0 & percent != 0 ) {
         var percentage = Math.abs(percent);
        temp += "<td>" + percentage + "%"+ "  <img src=' images/red-arrow.jpeg' width=14 alt='Red-arrow'/>" + "</td>";
      } else {
        temp += "<td>"+percent+"</td>";
      }
      temp += "<td>" + data[i].latestPrice + "</td>";
      temp += "</tr>";
    }
    document.getElementById("table_body").innerHTML = temp;
  } catch (err) {
    console.log(err);
  }
}

async function fetchLogo(symbol) {
  const logourl = npoint + '/Logo/' + symbol;
  const response = await fetch(logourl);
  const data = await response.json();
  return data.url;
}

$(document).ready(function () {
  $("#table").width("30%");
});

fetchData();
 
  // ------------Display the Top Gainers------------------------


async function fetchData1(){

  try{
    const res = await fetch(npoint + "/Gainers");
    const data = await res.json();
    temp = " ";
    var i;
    for(i=0;i<5;i++)
    {
      var symbol = data[i].symbol;
      var logo = await fetchLogo(symbol);
      // console.log("outsidefetch " +logo)
      temp += "<tr align=center>"
      temp += "<td> <img src='" + logo + "' width=60% height=60% >" + "</td>";
      temp += "<td>" + data[i].companyName + "</td>";
       var decimal = data[i].changePercent;
       var percent = decimal * 100;
       percent = percent.toFixed(2);
       if(percent > 0 && percent != 0)
       {
            temp += "<td>"+ percent + "%" + "   <img src = images/green-arrow.jpeg width=14 alt = 'green-arrow-image'>"+"</td>"
       }
       else if(percent < 0 && percent != 0)
       {
        var percentage = Math.abs(percent);
        temp += "<td>" + percentage +"%" + "    <img src = images/red-arrow.jpeg width = 14 alt = 'red-arrow-image'>" + "</td>"
       }
       else 
       {
        temp += "<td>" + percent + "</td>";
       }
       temp += "<td>" + data[i].latestPrice + "</td>"
       temp += "</tr>";

    }
    document.getElementById("table_body-1").innerHTML = temp;
  }
  catch(err){
    console.log(err)
  }
}

async function fetchLogo(symbol){
     const logourl = npoint + '/Logo/' + symbol;
     const response = await fetch(logourl)
     const data = await response.json();
     return data.url;
}
$(document).ready(function(){
  $("#table1").width("30%");
});
fetchData1()


// ----------------------------Display the Top Loosers-------------

async function fetchData2()
{
  try{
    var res = await fetch(npoint + "/Losers");
    const data = await res.json()
    var temp = " ";
    var i;
    for(i=0;i<5;i++)
    {
      var symbol = data[i].symbol;
      var logo = await fetchLogo(symbol);
      // console.log('outside-fetch'+logo)
      temp += "<tr>";
      temp += "<td>  <img src = '"+ logo + " ' width=70% height = 70% + </td>";
      temp += "<td>" + data[i].companyName +"</td>";
      var decimal = data[i].changePercent;
      console.log(decimal);
      var percent = decimal * 100;
      percent = percent.toFixed(2);
      if(percent > 0 && percent != 0)
      {
           temp += "<td>"+ percent + "%" + "<img src = images/green-arrow.jpeg width=14 alt = 'green-arrow-image'>" + "</td>";
      }
      else if(percent < 0 && percent != 0)
      {
       var percentage = Math.abs(percent);
       temp += "<td>" + percentage +"%" + "<img src = images/red-arrow.jpeg width = 14 alt = 'red-arrow-image'>" + "</td>";
      }
      else 
      {
       temp += "<td>" + percent + "</td>";
      }
      temp += "<td>" + data[i].latestPrice + "</td>";
      temp += "</tr>";

     
    }

  }
  catch(err)
  {
    console.log(err)
  }
  document.getElementById('table_body-2').innerHTML = temp;
}
async function fetchLogo(symbol){
  var logourl = npoint + '/Logo/' + symbol;
  const response = await fetch(logourl)
  const data =await response.json()
  return data.url;
}
fetchData2()




// async function fetchNews(symbol) {
//   try {
//     var newsSummary = [];
//     var headlines = [];
//     var result = await fetch(npoint + "/News/" + symbol);
//     const data = await result.json();
//     const newsArray = Object.entries(data.news);

//     for (var j = 0; j < 4 && j < newsArray.length; j++) {
//       var newsHeadline = (newsArray[j][1].headline);
//       var newsImage = ('Image: ' + newsArray[j][1].image);
//       var newsSummary = ('Summary: ' + newsArray[j][1].summary);
//       headlines.push(newsHeadline);
//       // console.log(headlines)
     
//     }
//     // return newsSummary;
//     return headlines;
  
//   } catch (err) {
//     console.log(err)
//   }
// }

// async function fetchData4() {
//   try {
//     var res = await fetch(npoint + "/MostActive");
//     const data = await res.json()
//     var symbol;
//     var i;
//     var allHeadlines = [];
//     for (i = 0; i < 5; i++) {
//       symbol = data[i].symbol;
//       console.log(symbol);
//       var headlines = await fetchNews(symbol);
//       allHeadlines = allHeadlines.concat(headlines);
//       // console.log(allHeadlines)
//     }
//     console.log(allHeadlines)
//     for(i=1;i<=17;i++){
       
//        var HeadlineId = "headline" + i
//        document.getElementById(HeadlineId).innerHTML = allHeadlines[i-1]; 
//     }
   
//   } catch (err) {
//     console.log(err)
//   }
// }

// fetchData4();

async function fetchNews(symbol) {
  try {
    var news = [];
    var result = await fetch(npoint + "/News/" + symbol);
    const data = await result.json();
    const newsArray = Object.entries(data.news);

    for (var j = 0; j < 4 && j < newsArray.length; j++) {
      var newsHeadline = (newsArray[j][1].headline);
      var newsImage = ('Image: ' + newsArray[j][1].image);
      var newsSummary = ('Summary: ' + newsArray[j][1].summary);
      news.push({symbol: symbol, headline: newsHeadline, image: newsImage, summary: newsSummary});
    }
    return news;
  } catch (err) {
    console.log(err)
  }
}

async function fetchData4() {
  try {
    var res = await fetch(npoint + "/MostActive");
    const data = await res.json()
    var symbol;
    var i;
    var allNews = [];
    for (i = 0; i < 5; i++) {
      symbol = data[i].symbol;
      console.log(symbol);
      var news = await fetchNews(symbol);
      allNews = allNews.concat(news);
    }
    console.log(allNews)
    for(i=1;i<allNews.length;i++){
       var HeadlineId = "headline" + i;
       var ImageId = "image" + (i+1);
       var SummaryId = "summary" + i;
       var SymbolId = "symbol" + i+1;
       document.getElementById(HeadlineId).innerHTML = allNews[i-1].headline; 
       document.getElementById(ImageId).innerHTML = allNews[i-1].image; 
       document.getElementById(SummaryId).innerHTML = allNews[i-1].summary; 
       document.getElementById(SymbolId).innerHTML = allNews[i-1].symbol; 
    }
  } catch (err) {
    console.log(err)
  }
}

fetchData4();
