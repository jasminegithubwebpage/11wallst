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
const npoint1= "https://www.cnbc.com/id/100003114/device/rss/rss.html";

async function fetchData() {
  try {
    const res = await fetch(npoint + "/MostActive");
    const data = await res.json();
    var temp = " ";
    var i;
    for (i = 0; i < 5; i++) {
      var MostActivesymbol = data[i].symbol;
      var logo = await fetchLogo(MostActivesymbol);
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
    return MostActivesymbol[0];
  }
  catch (err) {
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





$(document).ready(function(){
  var bbc = [];
  $.ajax({
 type:"GET",
 url:"https://www.cnbc.com/id/100003114/device/rss/rss.html",
 dataType:"xml",
 success:function(xml){
  
   $(xml).find("item").each(function(){
     var Title = $(this).find("title").text();
     var Description  = $(this).find("description").text();
     var Link = $(this).find("link").text();
  
    bbc.push({title:Title,desc:Description,link:Link});
  

   });
  //  console.log(bbc);
   console.log(bbc[0].title);
   for(l=0;l<4;l++)
   {
    inc = l + 1;
   document.getElementById("headline"+inc).innerHTML = bbc[l].title;
   document.getElementById("summary" + inc).innerHTML = bbc[l].desc;
   document.getElementById("url"+inc).href = bbc[l].link;
   }
 }
})
});

async function fetchActiveNews(){
  try{
  const data = await fetch(npoint + '/MostActive');
  const res1 = await data.json();
  var MostActivenews = [];
  var TotalMostActive = [];
 
  for(i=0;i<6;i++)
  {
    var first = res1[i].symbol;
    var MostNews = await fetch(npoint + '/News/' + first);
    var news1 = await MostNews.json();
    MostActivenews.push(news1);
    // var num1=(news1.news[0]);
    // var headline5 = num1.headline;
    // var image5 = num1.image;
    // var summary5 = num1.summary;
    // var url5 = num1.url;
    // TotalMostActive.push({headline:headline5,Image:image5,Summary:summary5,Url:url5});
    if (news1 && news1.news && news1.news.length > 0) {
      let num1 = news1.news[0];
      let headline5 = num1.headline;
      let image5 = num1.image;
      let summary5 = num1.summary;
      let url5 = num1.url;
      TotalMostActive.push({headline:headline5,Image:image5,Summary:summary5,Url:url5});
    } else {
      // If news data is not available for this company, get the data of the next company
      let nextCompanyIndex = i + 1;
      if (nextCompanyIndex < 6) {
        gain = res1[nextCompanyIndex].symbol;
        console.log('News data not available for ' + res1[i].name + ', getting data for ' + res1[nextCompanyIndex].name);
        MostNews = await fetch(npoint + '/News/' + gain);
        news2 = await MostNews.json();
        if (news2 && news2.news && news2.news.length > 0) {
          let num2 = news2.news[0];
          let headline6 = num2.headline;
          let image6 = num2.image;
          let summary6 = num2.summary;
          let url6 = num2.url;
          TotalMostActive.push({headline:headline6,Image:image6,Summary:summary6,Url:url6});
        }
      }
    }
  }

  

  // console.log(TotalMostActive);

  var MostHeadline = [];
  var MostImage = [];
  var MostSummary = [];
  var MostUrl = [];

  for(i=0;i<4;i++)
  {
    var newsheads = TotalMostActive[i].headline;
    // console.log(newsheads);
    MostHeadline.push(newsheads);
    var newsimage = TotalMostActive[i].Image
    MostImage.push(newsimage);
    var newsSummary = TotalMostActive[i].Summary;
    MostSummary.push(newsSummary);
    var newsurl = TotalMostActive[i].Url;
    MostUrl.push(newsurl);
  }

  for(k=0;k<4;k++)
  {
    var inc = k+5;
       
    var HeadlineId = "headline" + inc;
    var ImageId = "image" + inc;
    // console.log(ImageId)
    var SummaryId = "summary" + inc;
    var urlId = "url" + inc;
    
    var summary = MostSummary[k];
    var summaryText = summary ? sliceSummary(summary) : '';

    document.getElementById(HeadlineId).innerHTML = MostHeadline[k];
    document.getElementById(SummaryId).innerHTML = summaryText;
    document.getElementById(ImageId).src = MostImage[k];
    document.getElementById(urlId).href = MostUrl[k];
  }

  function sliceSummary(Summary) {
    const maxLength = 340;
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
catch(err)
{
  console.log(err);
}
}

// fetchActiveNews();

async function fetchGainersNews() {
  try {
    const data = await fetch(npoint + '/Gainers');
    const res1 = await data.json();
    var TopGainersnews = [];
    var TotalNews = [];
    for (let i = 0; i < 6; i++) {
      let gain = res1[i].symbol;
      console.log(gain);
      let MostNews = await fetch(npoint + '/News/' + gain);
      let news2 = await MostNews.json();
      TopGainersnews.push(news2);
      if (news2 && news2.news && news2.news.length > 0) {
        let num2 = news2.news[0];
        let headline6 = num2.headline;
        let image6 = num2.image;
        let summary6 = num2.summary;
        let url6 = num2.url;
        TotalNews.push({headline:headline6,Image:image6,Summary:summary6,Url:url6});
      } else {
        // If news data is not available for this company, get the data of the next company
        let nextCompanyIndex = i + 1;
        if (nextCompanyIndex < 6) {
          gain = res1[nextCompanyIndex].symbol;
          console.log('News data not available for ' + res1[i].name + ', getting data for ' + res1[nextCompanyIndex].name);
          MostNews = await fetch(npoint + '/News/' + gain);
          news2 = await MostNews.json();
          if (news2 && news2.news && news2.news.length > 0) {
            let num2 = news2.news[0];
            let headline6 = num2.headline;
            let image6 = num2.image;
            let summary6 = num2.summary;
            let url6 = num2.url;
            TotalNews.push({headline:headline6,Image:image6,Summary:summary6,Url:url6});
          }
        }
      }
    }

  var GainerHeadline = [];
  var GainerImage = [];
  var GainerSummary = [];
  var GainerUrl = [];

  for(v=0;v<4;v++)
  {
    var newsheads = TotalNews[v].headline;
    // console.log(newsheads);
    GainerHeadline.push(newsheads);
    var newsimage = TotalNews[v].Image
    GainerImage.push(newsimage);
    var newsSummary = TotalNews[v].Summary;
    GainerSummary.push(newsSummary);
    var newsurl = TotalNews[v].Url;
    GainerUrl.push(newsurl);
  }

  for(d=0;d<4;d++)
  {
    var inc = d+9;
       
    var HeadlineId = "headline" + inc;
    var ImageId = "image" + inc;
    // console.log(ImageId)
    var SummaryId = "summary" + inc;
    var urlId = "url" + inc;
    
    var summary = GainerSummary[d];
    var summaryText = summary ? sliceSummary(summary) : '';

    document.getElementById(HeadlineId).innerHTML = GainerHeadline[d];
    document.getElementById(SummaryId).innerHTML = summaryText;
    document.getElementById(ImageId).src = GainerImage[d];
    document.getElementById(urlId).href = GainerUrl[d];
  }

  function sliceSummary(Summary) {
    const maxLength = 340;
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
catch(err)
{
  console.log(err);
}
}

// fetchGainersNews();
async function fetchLosersNews(){
  try{
  const data = await fetch(npoint + '/Losers');
  const res1 = await data.json();
  // console.log(res.length)
  var TopLosersnews = [];
  var TotalNews = [];
  for(d=0;d<6;d++)
    {
      var second = res1[d].symbol;
      console.log(second)
      var MostNews = await fetch(npoint + '/News/' + second);
      var news3 = await MostNews.json();
      
      if (news3 && news3.news && news3.news.length > 0) {
        let num2 = news3.news[0];
        let headline6 = num2.headline;
        let image6 = num2.image;
        let summary6 = num2.summary;
        let url6 = num2.url;
        TotalNews.push({headline:headline6,Image:image6,Summary:summary6,Url:url6});
      } else {
        // If news data is not available for this company, get the data of the next company
        let nextCompanyIndex = i + 1;
        if (nextCompanyIndex < 6) {
          gain = res1[nextCompanyIndex].symbol;
          console.log('News data not available for ' + res1[i].symbol + ', getting data for ' + res1[nextCompanyIndex].symbol);
          MostNews = await fetch(npoint + '/News/' + gain);
          news2 = await MostNews.json();
          if (news2 && news2.news && news2.news.length > 0) {
            let num2 = news2.news[0];
            let headline6 = num2.headline;
            let image6 = num2.image;
            let summary6 = num2.summary;
            let url6 = num2.url;
            TotalNews.push({headline:headline6,Image:image6,Summary:summary6,Url:url6});
          }
        }
      }
    }

    
  console.log(TotalNews);

  var LoserHeadline = [];
  var LoserImage = [];
  var LoserSummary = [];
  var LoserUrl = [];

  for(v=0;v<4;v++)
  {
    var newsheads = TotalNews[v].headline;
    // console.log(newsheads);
    LoserHeadline.push(newsheads);
    var newsimage = TotalNews[v].Image
    LoserImage.push(newsimage);
    var newsSummary = TotalNews[v].Summary;
    LoserSummary.push(newsSummary);
    var newsurl = TotalNews[v].Url;
    LoserUrl.push(newsurl);
  }

  for(d=0;d<4;d++)
  {
    var inc = d+13;
       
    var HeadlineId = "headline" + inc;
    var ImageId = "image" + inc;
    // console.log(ImageId)
    var SummaryId = "summary" + inc;
    var urlId = "url" + inc;
    
    var summary = LoserSummary[d];
    var summaryText = summary ? sliceSummary(summary) : '';

    document.getElementById(HeadlineId).innerHTML = LoserHeadline[d];
    document.getElementById(SummaryId).innerHTML = summaryText;
    document.getElementById(ImageId).src = LoserImage[d];
    document.getElementById(urlId).href = LoserUrl[d];
  }

  function sliceSummary(Summary) {
    const maxLength = 340;
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
catch(err)
{
  console.log(err);
}
}

// fetchLosersNews();
