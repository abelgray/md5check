# md5check

## Just a simple md5sum checker as a replacement for QuickSFV

### Installation
Install node modules, then link it to some name (like md5sum) in your ~/bin folder or in /usr/local/bin if you wish. Make sure it is executable!

```
npm install
ln -s index.js /path/to/your/preferred/binary/name
chmod +x index.js
```

### Usage
Invoke on the command line, passing one or more .md5sum files

```
md5check /path/to/file.md5sum
