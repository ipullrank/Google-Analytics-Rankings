/* 
RankingsPush by Michael King 
mike@ipullrank.com
@ipullrank

The following function pulls the ranking
from the cd parameter in Google and pushes it
to a custom variable in Google Analytics
called "Rankings." 

For information on the applications of this
see John Doherty's post on SEOmoz:
http://www.seomoz.org/blog/gettings-rankings-into-ga-using-custom-variables

*/

function rankingsPush()
{
  var url = String(document.referrer);

  var ref = new RegExp("(google)\.([A-z]{2,3}/)|(google)\.([A-z]{2,3})\.([A-z]{2}/)");

	// confirm they came from G
	if (ref.test(url))
	{	

		var urlVars = {};
		var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value)
		{
			urlVars[key] = value;
		});

		// Push to GA Custom Variables
		_gaq.push(['_setCustomVar', '1', 'Rankings', urlVars["cd"], 1]);

	}

}
