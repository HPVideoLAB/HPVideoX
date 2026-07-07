# blog-admin (backend.hpvideo.io)

Source-less built Vue+element-plus app. Served by `hpvideo-static-backend`
(stock nginx) from hostPath `/data/hpvideo/static-backend` on master01.
No source repo, no sourcemaps — only the built dist.

## 2026-07-07 — error surfacer injected
`error-surfacer.html` is a <script> injected into
`/data/hpvideo/static-backend/index.html` (right after <div id="app">).
It patches XHR + fetch; when addBlog/editBlog returns non-200 or
success:false (or a network error/timeout), it shows a fixed red banner
at the top with the HTTP status + backend message, so upload failures
are visible and screenshot-able. Persists via hostPath (survives pod
restart; no image rebuild). Backup: index.html.bak.<ts> on the node.

## 2026-07-07 — version badge
Also injected a bottom-right build badge "后台版本 vYYYY.MM.DD-N"
(id=__blogVer, var VER in index.html). Bump the VER string whenever the
injected overrides change so the user can confirm the page isn't cached.
Current: v2026.07.07-1.

## 2026-07-07 — cover preview + success (v2026.07.07-3)
The app's native cover preview never shows for NEW blogs: its Vue-bound
<img> src is `{base}+{img_file}` where base is the WRONG host
(www.hpvideo.ai, images actually serve from .io) and img_file is empty
until after save. Directly setting that img.src doesn't stick (Vue
re-renders). Fix: on cover file-select, overlay our OWN <img.__myPreview>
(base64) inside .upload_cont1 (Vue doesn't manage it) + green success
toast. See preview-success.html. Bump VER on any change.
