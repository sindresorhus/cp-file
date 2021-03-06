'use strict';

exports.buildEACCES = path => Object.assign(new Error(`EACCES: permission denied '${path}'`), {
	errno: -13,
	code: 'EACCES',
	path
});

exports.buildENOSPC = () => Object.assign(new Error('ENOSPC, write'), {
	errno: -28,
	code: 'ENOSPC'
});

exports.buildENOENT = path => Object.assign(new Error(`ENOENT: no such file or directory '${path}'`), {
	errno: -2,
	code: 'ENOENT',
	path
});

exports.buildEIO = () => Object.assign(new Error('EIO: i/o error, read errno: -5'), {
	errno: -5,
	code: 'EIO'
});

exports.buildERRSTREAMWRITEAFTEREND = () => Object.assign(new Error('ERR_STREAM_WRITE_AFTER_END'), {
	code: 'ERR_STREAM_WRITE_AFTER_END'
});

exports.buildEBADF = () => Object.assign(new Error('EBADF: bad file descriptor'), {
	errno: -9,
	code: 'EBADF'
});

exports.buildEPERM = (path, method) => Object.assign(new Error(`EPERM: ${method} '${path}''`), {
	errno: 50,
	code: 'EPERM'
});
