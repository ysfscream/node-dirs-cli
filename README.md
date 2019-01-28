# node-get-dirs

📖 Node CLI to get directory’s content

## Usage

```shell
yarn add node-get-cli --dev

get-dirs
```

Details in `get-dirs --help`

```shell
get-dirs -h
get-dirs -p ./ -n data.json -e ./ -f .DS_Store

Usage: get-dirs <target-path> <filename> <export-path> <filter>

config：
  --version, -v   Display version number                 [Boolean]
  --help, -h      Display help messages                  [Boolean]
  --path, -p      <target-path> the path to get the content
                                                         [String] [default: "./"]
  --filename, -n  <filename> export filename      			 [String] [default: "data.json"]
  --export, -e    <export-path> the path to export the json
                                                         [String] [default: "./"]
  --filter, -f    <filter> exclude filenames or directories
  																											 [Arrary] [default: "default]"]
```

## Dev

```shell
# dev
yarn dev

# buid
yarn build
```
