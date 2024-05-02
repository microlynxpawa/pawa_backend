import { XcoreAppApplication } from './app';
import { Configuration } from "./config/readConfiguration";


// unsure configuration is read 
const settings = new Configuration();
const { success: result } = settings.readConfiguration();
// if configuration does not exist then exit application
if (!result) {
  process.exit(1);
}


process.on("warning", (e) => {
    console.log(e.stack);
});

process.on('uncaughtException', (e) => {
    console.log(e.message)
});

const xcoreApp = new XcoreAppApplication(8080, '/api/v1');

xcoreApp.listen();