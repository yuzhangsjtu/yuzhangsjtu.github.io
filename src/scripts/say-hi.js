// Ported from the SayHi inline script in apps/web/src/app/[locale]/layout.tsx.
;(function () {
  console.info(
    `%c Mix Space %c https://github.com/mx-space`,
    'color: #fff; margin: 1em 0; padding: 5px 0; background: #2980b9;',
    'margin: 1em 0; padding: 5px 0; background: #efefef;',
  )
  console.info(
    `%c 余白 / Yohaku ${window.version || ''} %c https://innei.in`,
    'color: #fff; margin: 1em 0; padding: 5px 0; background: #39C5BB;',
    'margin: 1em 0; padding: 5px 0; background: #efefef;',
  )

  const motto = `
余白 / Yohaku
--------
What's left unsaid holds the most weight.

The blank space is part of the writing.
`

  if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
    document.prepend(document.createComment(motto))
  }
})()
