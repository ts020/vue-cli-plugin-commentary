var changelog = require('conventional-changelog')
var fs = require('fs')

changelog(
    {
        repository: 'https://github.com/ts020/vue-plugin-commentary', // 紐付けたいリポジトリを指定します。
        version: require('./package.json').version, // バージョンを表す文字列を指定します。
    },
    function(err, log) {
        fs.writeFileSync('./CHANGELOG.md', log)
    },
)
