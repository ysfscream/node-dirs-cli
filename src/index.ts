#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const signale = require('signale')

const argv = require('yargs')
  .usage(
    'get-dirs -p ./ -n data.json -e ./ -f .DS_Store\n\nUsage: get-dirs <target-path> <filename> <export-path> <filter>'
  )
  .help('help')
  .alias('help', 'h')
  .alias('version', 'v')
  .option('path', {
    alias: 'p',
    description: '<target-path> the path to get the content',
    default: './',
    type: 'string',
  })
  .option('filename', {
    alias: 'n',
    description: '<filename> export filename',
    default: 'data.json',
    type: 'string',
  })
  .option('export', {
    alias: 'e',
    description: '<export-path> the path to export the json',
    default: './',
    type: 'string',
  })
  .option('filter', {
    alias: 'f',
    description: '<filter> exclude filenames or directories',
    default: '[]',
    type: 'array',
  })
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

const outputFile = (dirs: []) => {
  fs.writeFile(`${_export}/${_filename}`,
    JSON.stringify(dirs, null, 2),
    (err: string) => {
      if (err) {
        signale.error(err)
        process.exit(1)
      } else {
        signale.success('Get directory of apps successful!')
        process.exit(0)
      }
    })
}

outputFile(getDirs(root))
