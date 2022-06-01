const { winston, format, createLogger, stream,transports } = require('winston');
const { combine, timestamp, prettyPrint, json, printf, metadata } = format;

const {fs}=require('fs');

const UserFormat = printf(({ level,  user, timestamp,action}) => {
  return `{"level":'${level}',"User": '${user}', "when": '${timestamp}', "action":'${action}'} `;
});




const FormFormat = printf(({ level, form, user,action, timestamp,data,previousData }) => {
  return `{"level":${level},"User": ${user},"action": ${action}, "when": ${timestamp}, "data":${data},  "form":${form},"previousData":${previousData}}`;
});

const logFormFormat = combine(
  json(),
  timestamp(),
  FormFormat,
   );

 
const logUserFormat=  combine(
    json(),
    timestamp(),
   
    UserFormat
);

const fileFormat=  combine(
    json(),
    timestamp(),
  
    prettyPrint()
  );
  
  const ImageUploadLog = createLogger({
    level: 'info',
    format:  fileFormat,
  
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.File({ filename: '../Logs/ImageUpload.json' })
      
    ],
  });
  
  const FileUploadLog = createLogger({
    level: 'info',
    format:  fileFormat,
  
    defaultMeta: { service: 'user-service' },
    transports: [
  
        new transports.File({ filename: '../Logs/FileUpload.json' })
    ],
  });

  const UserLog = createLogger({
    level: 'info',
    format:  logUserFormat,
  
    defaultMeta: { service: 'user-service' },
    transports: [
  
        new transports.File({ filename: '../Logs/UserLogin.json' })
    ],
  });
  
  const Formlog = createLogger({
    level: 'info',
    format:  logFormFormat,
  
   // defaultMeta: { service: 'user-service' },
    transports: [
  
        new transports.File({ filename: __dirname+'/Logs/FormLogs.json' })
    ],
  });
 

 
if (process.env.NODE_ENV !== 'production') {
    UserLog.add(new transports.Console({
    format: format.simple(),
  }));
}
module.exports={UserLog,FileUploadLog,ImageUploadLog,Formlog};