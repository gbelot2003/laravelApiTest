<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>front</title>
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
<div id="app">
    <router-view></router-view>
</div>
<script src="/js/app.js"></script>
</body>
</html>

