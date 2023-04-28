export default `
body,
body *:not(html):not(style):not(br):not(tr):not(code) {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Work Sans', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    position: relative;
}
body {
    -webkit-text-size-adjust: none;
    background-color: #ffffff;
    color: #657387;
    height: 100%;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    width: 100% !important;
}
p,
ul,
ol,
blockquote {
    line-height: 1.4;
    text-align: left;
}
a {
    color: #3F746F;
}
a img {
    border: none;
}
/* Typography */
h1 {
    color: #343750;
    font-size: 18px;
    font-weight: bold;
    margin-top: 0;
    text-align: left;
}
h2 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
    text-align: left;
}
h3 {
    font-size: 14px;
    font-weight: bold;
    margin-top: 0;
    text-align: left;
}
p {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 0;
    text-align: left;
}
p.sub {
    font-size: 12px;
}
img {
    max-width: 100%;
}
/* Layout */
.wrapper {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%;
    background-color: #F7F7F8;
    margin: 0;
    padding: 0;
    width: 100%;
}
.content {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
}
/* Header */
.header {
    padding: 25px 0;
    text-align: center;
}
.header a {
    color: #343750;
    font-size: 19px;
    font-weight: bold;
    text-decoration: none;
}
/* Logo */
.logo {
    height: 75px;
    max-height: 75px;
    width: 75px;
}
/* Body */
.body {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%;
    background-color: #F7F7F8;
    border-bottom: 1px solid #F7F7F8;
    border-top: 1px solid #F7F7F8;
    margin: 0;
    padding: 0;
    width: 100%;
}
.inner-body {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 570px;
    background-color: #ffffff;
    border: none;
    margin: 0 auto;
    padding: 0;
    width: 570px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
}
/* Subcopy */
.subcopy {
    border-top: 1px solid #e8e5ef;
    margin-top: 25px;
    padding-top: 25px;
}
.subcopy p {
    font-size: 12px;
}
/* Footer */
.footer {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 570px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 570px;
}
.footer p {
    color: #C5C5C5;
    font-size: 12px;
    text-align: center;
}
.footer a {
    color: #C5C5C5;
    text-decoration: underline;
}
/* Tables */
.table table {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%;
    margin: 30px auto;
    width: 100%;
    border-collapse: collapse;
}
.table th {
    border: 1px solid #edeff2;
    margin: 0;
    padding: 10px;
    text-align: left;
    vertical-align: top;
}
.table td {
    border: 1px solid #edeff2;
    color: #74787e;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
    padding: 10px;
    vertical-align: top;
}
.content-cell {
    max-width: 100vw;
    padding: 32px;
}
/* Buttons */
.action {
    -premailer-cellpadding: 0;
    -premailer-cellspacing: 0;
    -premailer-width: 100%;
    margin: 30px auto;
    padding: 0;
    text-align: center;
    width: 100%;
}
.button {
    -webkit-text-size-adjust: none;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    font-weight: 400;
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
}
.button-blue,
.button-primary {
    background-color: #46ADA3;
    border-bottom: 8px solid #46ADA3;
    border-left: 18px solid #46ADA3;
    border-right: 18px solid #46ADA3;
    border-top: 8px solid #46ADA3;
}
.button-green,
.button-success {
    background-color: #48bb78;
    border-bottom: 8px solid #48bb78;
    border-left: 18px solid #48bb78;
    border-right: 18px solid #48bb78;
    border-top: 8px solid #48bb78;
}
.button-red,
.button-error {
    background-color: #e53e3e;
    border-bottom: 8px solid #e53e3e;
    border-left: 18px solid #e53e3e;
    border-right: 18px solid #e53e3e;
    border-top: 8px solid #e53e3e;
}
/* Panels */
.panel {
    border-left: #46ADA3 solid 4px;
    margin: 21px 0;
}
.panel-content {
    background-color: #F7F7F8;
    color: #718096;
    padding: 16px;
}
.panel-content p {
    color: #718096;
}
.panel-item {
    padding: 0;
}
.panel-item p:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
}
/* Utilities */
.break-all {
    word-break: break-all;
}
`
