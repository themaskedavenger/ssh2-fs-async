/**
 * @file Main access point for ssh2-fs-promise.
 */

import * as fs from 'ssh2-fs';
import ssh2Connect from 'ssh2-connect';

export function connect(options, callback) {
  return new Promise((resolve, reject) => {
    ssh2Connect(options, (err, ssh) => {
      if (err) {
        reject(err);
      }
      resolve(ssh);
    });
  });
}

export async function mkdir(options, path) {
  
}

