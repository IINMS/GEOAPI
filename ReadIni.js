const fs = require('fs');
const ini = require('ini')

const path = require('ini');

LangIni = function (language) {

	//	var LanguagesPath="Languages";
	var langObj;
	var fileNames;
	switch (language) {


		case "el_gr":
			console.log(__dirname)
			fileNames = ReadDir(language); //language=dirname
			console.log('%c Filenames ' + fileNames, 'background: #222; color: #bada55');

			langObj = ReadFile(fileNames, language);
			break;

		case "en_us":


			fileNames = ReadDir(language);
			console.log('%c Filenames ' + fileNames, 'background: #222; color: #bada55');
			langObj = ReadFile(fileNames, language);
			break;

		default:
			let config = null;


	}
	return langObj;
};

ReadDir = function (dirName)   //Reads a folder
{
	let path = __dirname + "\\" + dirName;
	return fs.readdirSync(path, (err, files) => {
		if (err)
			console.log(err);

	})

}

ReadFile = function (files, dirName) { //Reads all the ini files of a folder

	var data = {};

	let path = __dirname + "\\" + dirName;

	files.forEach(file => {

		var config = ini.parse(fs.readFileSync(path + "/" + file, 'utf-8'));

		file = file.substring(0, file.lastIndexOf('_'));
		file = file.substring(0, file.lastIndexOf('_'));




		if (file.includes("comm"))
			data[file] = config;

		if (!file.includes("comm")) {
			for (let [key, value] of Object.entries(config))
				data[key] = config[key]

		}

	})

	return data;
}





module.exports = { LangIni, ReadDir, ReadFile };



