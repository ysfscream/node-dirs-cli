#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const signale = require('signale')
const argv = require('yargs')
  .alias('p', 'path')
  .alias('n', 'filename')
  .alias('e', 'export')
  .alias('f', 'filter')
  .array('filter')
  .argv

let _dirname: string = './'
let _filename: string = 'data.json'
let _export: string = './'
let _filter: [] = []

if (argv.path) {
  _dirname = argv.path
}
if (argv.filename) {
  _filename = argv.filename
}
if (argv.export) {
  _export = argv.export
}
if (argv.filter) {
  _filter = argv.filter
}

const root = path.join(_dirname)

const getDirs = (path: string) => {
  const dirs = fs.readdirSync(path)
  if (_filter.length) {
    return dirs.filter((dir: never) =>
      !_filter.includes(dir)
    )
  }
  return dirs
}

const setApps = (dirs: []) => {
  fs.writeFile(`${_export}/${_filename}`,
    JSON.stringify(dirs, null, 2),
    (err: string) => {
      if (err) {
        signale.error(err)
      } else {
        signale.success('Get directory of apps successful!')
      }
    })
}

setApps(getDirs(root))
