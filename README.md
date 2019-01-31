# node-dirs-cli

📖 Node CLI to get directory’s content

## Usage

```shell
yarn add node-dirs-cli --dev

yarn get-dirs
```

Details in `get-dirs --help`

```shell
get-dirs -h
get-dirs -p ./ -n data.json -e ./User -f .DS_Store *.js

Usage: get-dirs <target-path> <filename> <export-path> <filter>

config：
  --version, -v   display version number                [Boolean]
  --help, -h      display help messages                 [Boolean]
  --path, -p      <target-path> the path to get the content
                                                        [String] [default: "./"]
  --filename, -n  <filename> export filename            [String] [default: "data.json"]
  --export, -e    <export-path> the path to export the json
                                                        [String] [default: "./"]
  --filter, -f    <filter> exclude filenames or directories
                                                        [Arrary] [default: "default]"]
```

## Development

```shell
#clone
git clone git@github.com:ysfscream/node-dirs-cli.git

# dev
yarn dev

# build
yarn build
```
