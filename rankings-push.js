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

Updated 3/11/2012 to change the scope in GA, check for any
Google property (not just google.com) and return ranking
for dynamic messaging applications.

*/

function rankingsPush()
{
  var url = String(document.referrer);

	// confirm they came from G
	if (url.indexOf ("google.") !=-1)
	{	

		var urlVars = {};
		var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value)
		{
			urlVars[key] = value;
		});

		// Push to GA Custom Variables
		_gaq.push(['_setCustomVar', '1', 'Rankings', urlVars["cd"], 2]);
		
		// Return the ranking in case 
		// you dynamic targeting based on ranking
		
		return urlVars["cd"];

	}

}
