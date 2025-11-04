<!doctype html><html><head>
<meta charset="utf-8"><title>Habits — STREAK7</title>
<link rel="stylesheet" href="../assets/css/style.css">
</head><body>
<div class="sidebar"><div class="logo">S7</div></div>
<div class="main">
  <div class="card">
    <h2>Add Habit</h2>
    <input id="habit" class="input" placeholder="New habit">
    <button class="btn" onclick="addHabit(document.getElementById('habit').value)">Add</button>
  </div>
  <div class="card"><h3>Current Streaks</h3>
    <p class="small">Workout — 4 days</p>
    <p class="small">Study — 3 days</p>
  </div>
</div>
<%@ include file="../config.jsp" %>
<script src="../assets/js/app.js"></script>
</body></html>
