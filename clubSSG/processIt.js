const fs = require('fs');
const matter = require('gray-matter');
const nunjucks = require('nunjucks');
const commonmark = require('commonmark');

nunjucks.configure('views');

let srcPrefix = __dirname + "/src";
let bldPrefix = __dirname + "/build";
let allFiles = fs.readdirSync(srcPrefix);

console.log("Processing the src directory: ");
allFiles.forEach(function(srcName) {
	console.log('Reading ' + srcName);
	let fname = srcPrefix + '/' + srcName; // full name of the file to be read
	let fdata = fs.readFileSync(fname, 'utf8');
	
	let reader = new commonmark.Parser();
	let writer = new commonmark.HtmlRenderer();
	
	let markdownDataString = matter(fdata);
	let parsed = reader.parse(markdownDataString.content); // your markdown data in here
	let result = writer.render(parsed); // result is an HTML string
	
	let outString = nunjucks.render('base.njk',{mainContent:result,pageTitle:markdownDataString.data.title,author:markdownDataString.data.author});
	
	// create the full name of the file to be written change extension to .html
	let outName = (bldPrefix + '/' + srcName).replace(".md", ".html");
	fs.writeFileSync(outName, outString);
	console.log("Wrote file");
	console.log("----------------------");
});