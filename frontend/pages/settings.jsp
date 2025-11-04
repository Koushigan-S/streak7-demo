<!doctype html><html><head>
<meta charset="utf-8"><title>Settings — STREAK7</title>
<link rel="stylesheet" href="../assets/css/style.css">
</head><body>
<div class="sidebar"><div class="logo">S7</div></div>
<div class="main">
  <div class="card"><h2>Profile</h2>
    <p class="small">Nova 🌙</p>
    <button class="btn ghost" onclick="localStorage.clear();window.location='index.jsp'">Logout</button>
  </div>
  <div class="card"><h3>Preferences</h3>
    <label class="small">Theme</label>
    <select class="input"><option>Dark</option><option>Light</option></select>
  </div>
</div>
<%@ include file="../config.jsp" %>
<script src="../assets/js/app.js"></script>
</body></html>
