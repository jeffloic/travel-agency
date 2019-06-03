var path = require("path");

module.exports = {
	mode: "development",
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/src/scripts"),
		filename: "[name].js"
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
	