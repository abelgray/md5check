# md5check

## Just a simple md5sum checker as a replacement for QuickSFV

### Installation
Install node modules, then link it to your ~/bin folder or in /usr/local/bin if you wish. Make sure it is executable!

```
npm install
chmod +x md5check.js
ln -s md5check.js /path/to/md5check
```

### Usage
Invoke on the command line, passing one or more .md5sum files

```
md5check /path/to/file.md5sum
