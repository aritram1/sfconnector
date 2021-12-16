// import { LoginManager, MetadataManager, DMLManager } from './main';

// const loginmanager = LoginManager();
// const metadatamanager = MetadataManager();
// const dmlmanager = DMLManager();

// // SC001 : Login with oauth
// let {data : {auth_token, expires_at, refresh_token}, error } = await loginmanager.login({ type : 'auth2', key : 'KEY', secret : 'SECRET' });
// console.assert(!error && data && auth_token && expires_at && refresh_token);

// // SC001E : Error scenario : Login with oauth
// let {data : {auth_token, expires_at, refresh_token}, error } = await loginmanager.login({ type : 'auth2', key : 'WrongKey', secret : 'SECRET' });
// console.assert(error && !data && !auth_token && !expires_at && !refresh_token);

// // SC002 : Login with password
// let {auth_token1, expires_at1, refresh_token1} = await loginmanager.login({ type: 'password', uname : 'username@example.com', pwd : 'P123' });
// console.assert(!error && data && auth_token && expires_at && refresh_token);

// // SC002E : Error scenario : Login with password
// let {auth_token1, expires_at1, refresh_token1} = await loginmanager.login({ type: 'password', uname : 'username@example.com', pwd : 'P123' });
// console.assert(error && !data && !auth_token && !expires_at && !refresh_token);

// // SC003 : Query data
// let {data : { count, records }, error} = await dmlmanager.getData({object : 'contact', fields : 'id, firstname, lastname', count : 10});
// console.assert( count == 10 && records.length >= 0 && error == undefined);

// // SC003E : Error scenario to query data
// let {data : { count, records }, error} = await dmlmanager.getData({object : 'contact', fields : 'namefirst, lastname', count : 10});
// console.assert( error != '' && data == undefined);

// // SC004 : Inserting data
// let { data : { count, success }, error : { message } } = await dmlmanager.insertData({
//     object : 'Contact', 
//     data : [
//         { 'firstname' : 'testFirst', 'lastname' : 'testlast'},
//         { 'firstname' : 'testFirst2', 'lastname' : 'testlast2'}
//     ]
// });
// console.assert(count != undefined && success.length > 0 && error == undefined);

// // SC004E : Error scenario : Insert data
// let { data, error } = await dmlmanager.insertData({
//     object : 'Contact', 
//     data : [
//         { 'namefirst' : 'wrong API name in key'},
//         { 'id' : '246', 'firstname' : 'testFirst2', 'lastname' : 'testlast2'}
//     ]
// });
// console.assert(data == undefined && error != undefined);

// // SC005 : Update data
// let { data : { count, success, failure }, error : { message } } = await dmlmanager.updateData({
//     object : 'Contact', 
//     data : [
//         { 'id' : '123', 'firstname' : 'testFirst', 'lastname' : 'testlast'},
//         { 'id' : '246', 'firstname' : 'testFirst2', 'lastname' : 'testlast2'}
//     ]
// });
// console.assert(count && success.length > 0 && !error);

// // SC005E : Error scenario : Update data
// let { data, error } = await dmlmanager.updateData({
//     object : 'Contact', 
//     data : [
//         { 'id' : '', 'namefirst' : 'wrong API name in key'},
//         { 'id' : '246', 'firstname' : 'testFirst2', 'lastname' : 'testlast2'}
//     ]
// });
// console.assert(!data && error);

// /////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////W I P/////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////

// // SC006 : get Object Metadata
// let { data , error } = await metadatamanager.getMetadata({ type : 'o', objects : ['Account', 'contact']});
// console.assert(data && data['account'] && data['contact'] && !error);

// // SC006E1 : Error scenario get Object Metadata (incorrect param)
// let { data , error : { message } } = await metadatamanager.getMetadata({ type : 'o', objects : []});
// console.assert(!data && data['account'] && data['contact'] && message);

// // SC006E2 : Error scenario get Object Metadata (incorrect object name)
// let { data , error : { message } } = await metadatamanager.getMetadata({ type : 'o', objects : ['Account', 'toncact']});
// console.assert(!data && message);

// // SC007 : get Field Metadata
// let { data , error : { message } } = await metadatamanager.getMetadata({type : 'f', object: 'Contact', fields : ['name', 'email']});
// console.assert(data && data['contact'] && !error);

// // SC007E1 : Error scenario get Metadata (incorrect param)
// let { data , error : { message } } = await metadatamanager.getMetadata({type : 'f', fields : ['name', 'email']});
// console.assert(!data && message);

// // SC007E2 : Error scenario get Metadata (incorrect object name)
// let { data , error : { message } } = await metadatamanager.getMetadata({type : 'f', object: 'toncact', fields : ['name', 'email']});
// console.assert(!data && message);

// // SC007E3 : Error scenario get Metadata (incorrect type)
// let { data , error : { message } } = await metadatamanager.getMetadata({type : 'P', object: 'Contact', fields : ['name', 'email']});
// console.assert(!data && message);

// // SC007E4 : Error scenario get Metadata (missing type)
// let { data , error : { message } } = await metadatamanager.getMetadata({object: 'Contact', fields : ['name', 'email']});
// console.assert(!data && message);