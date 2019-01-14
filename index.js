#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const signale = require('signale')

let _dirname = './';
if (process.argv[2]) {
  _dirname = process.argv[2];
};

const root = path.join(_dirname)

const getDirs = (path, filter) => {
  return fs.readdirSync(path)
}

const setApps = (dirs) => {
  console.log(dirs)
  signale.success('Get directory of apps successful!')
// fs.writeFile('./src/assets/micro.apps.json', JSON.stringify(dirs), (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Get directory of apps successful!')
//   }
// })
}

setApps(getDirs(root))
