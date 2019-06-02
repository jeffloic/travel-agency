var path = require("path");

module.exports = {
	mode: "development",
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/src/scripts"),
		filename: "App.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:'babel-loader',
					options: {
						"presets": [
					    ["env", {
					      "targets": {
					        // The % refers to the global coverage of users from browserslist
					        "browsers": [ ">0.25%", "not ie 11", "not op_mini all"]
					      }
					    }]
					  ]
					}
				}
			}
		]
	}


}


{
  
}
	