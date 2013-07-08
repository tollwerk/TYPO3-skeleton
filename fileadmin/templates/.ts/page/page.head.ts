#FAVICON
page.shortcutIcon								= favicon.ico
 
#META
page.meta.author								= Page Author
page.meta.robots								= index,follow
 
#CSS
page.includeCSS {
#	fonts		  										= http://fonts.googleapis.com/css?family=Droid+Sans:400,700|Droid+Serif:400,700,400italic
#	fonts.external							  = 1
#  normalize									  	= fileadmin/templates/css/normalize.css
}
page.CSS_inlineStyle						>
config.inlineStyle2TempFile			= 1

# [browser = msie] && [version= <9]
#  page.includeCSS.ie8	 					= fileadmin/templates/css/ie8.css
# [global]

#JAVASCRIPT
page.includeJS {
	html5												 = http://html5shiv.googlecode.com/svn/trunk/html5.js
	html5.external               = 1
	html5.allWrap                = <!--[if lt IE 9]>|<![endif]-->
	html5{
		disableCompression				 = 1
		forceOnTop								 = 1
		excludeFromConcatenation	 = 1
	}		
}  
page.includeJSFooter {
  jquery                       = http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
  jquery {
    external                   = 1
    forceOnTop                 = 1
    disableCompression         = 1
    excludeFromConcatenation   = 1
  }
}
config.removeDefaultJS         = external
		
# GOOGLE ANALYTICS TRACKING CODE PLUGIN
# page.headerData.9999				 =< plugin.tx_twgoogleanalytics